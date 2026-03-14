import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { CarFiltersDto } from "../types/car.types";

function isRepeatingPrice(price: number | null): boolean {
  if (!price) return false;
  
  const priceStr = Math.abs(price).toString()
  if (priceStr.length < 2) return false;
  
  const firstChar = priceStr[0];
  return priceStr.split('').every(char => char === firstChar);
}

export function mapCarToDto(car: any) {
  const priceKrw = car.price !== null ? Number(car.price) : null;
  
  return {
    id: car.id.toString(),
    encar_id: car.encar_id ?? null,
    brand: car.parser_carmanufacturer?.name ?? null,
    model: car.model ?? null,
    trim: car.version ?? null,
    year: car.model_year ?? null,
    mileage: car.mileage ?? null,
    
    engineCapacity: car.engine_capacity ?? null,
    horsepower: car.hp ?? null,
    releaseMonth: car.release_date ? String(car.release_date).slice(4, 6) : null,
    releaseYear: car.release_date ? String(car.release_date).slice(0, 4) : null,

    priceKrw: priceKrw,
    ruPrice: car.ru_price ?? null,
    customsDuty: car.customs_duty ?? null,
    recyclingFee: car.recycling_fee ?? null,
    finalPrice: car.final_price_rub ?? null,

    transmission: car.transmission ?? null,
    fuel: car.parser_carfuel?.value_name ?? null,
    body: car.parser_carbody?.value_name ?? null,
    color: car.parser_carcolor?.value_name ?? null,
    manufacturerKey: car.parser_carmanufacturer?.value_key ?? null,

    sellType: car.sell_type ?? null,
    isValid: car.is_valid ?? null,

    images: Array.isArray(car.parser_carphoto)
      ? car.parser_carphoto.map((p: any) => p.link)
      : [],

    diagnosis: car.parser_cardiagnosis ?? null,
    record: car.parser_carrecord ?? null,
    
    // Новый флаг для забронированных авто (только для повторяющихся цен в KRW)
    isReserved: priceKrw ? isRepeatingPrice(priceKrw) : false,
  };
}

function buildWhere(filters: CarFiltersDto): Prisma.parser_carWhereInput {
  const where: Prisma.parser_carWhereInput = {
    manufacturer_id: { not: null },
  };

  // Производитель
  if (filters.manufacturer) {
    where.parser_carmanufacturer = {
      value_key: filters.manufacturer,
    };
  }
  // Цвет
  if (filters.color) {
    where.parser_carcolor = {
      value_key: filters.color,
    };
  }
  // Модель
  if (filters.model) {
    where.model = filters.model;
  }

  // Топливо
  if (filters.fuel) {
    where.parser_carfuel = {
      value_key: filters.fuel,
    };
  }

  // Кузов
  if (filters.body) {
    where.parser_carbody = {
      value_key: filters.body,
    };
  }

  // Трансмиссия
  if (filters.transmission) {
    where.transmission = filters.transmission;
  }

  // Цена
  if (filters.priceStart || filters.priceEnd) {
    where.final_price_rub = {};

    if (filters.priceStart) {
      where.final_price_rub.gte = Number(filters.priceStart);
    }

    if (filters.priceEnd) {
      where.final_price_rub.lte = filters.priceEnd;
    }
  }

  // Пробег
  if (filters.mileageStart || filters.mileageEnd) {
    where.mileage = {};

    if (filters.mileageStart) {
      where.mileage.gte = filters.mileageStart;
    }

    if (filters.mileageEnd) {
      where.mileage.lte = filters.mileageEnd;
    }
  }

  // Год
  if (filters.yearStart || filters.yearEnd) {
    where.model_year = {};

    if (filters.yearStart) {
      where.model_year.gte = filters.yearStart;
    }

    if (filters.yearEnd) {
      where.model_year.lte = filters.yearEnd;
    }
  }

  // Проходные
  if (typeof filters.isValid === "boolean") {
    where.is_valid = filters.isValid;
  }

  // Исключить лизинг
  // if (filters.excludeLeasing) {
  //   where.sell_type = {
  //     contains: "Обычная покупка",
  //   };
  // }

  return where;
}

function buildOrder(sort?: string): Prisma.parser_carOrderByWithRelationInput {
  switch (sort) {
    case "price-low":
      return { final_price_rub: "asc" };

    case "price-high":
      return { final_price_rub: "desc" };

    case "year-new":
      return { model_year: "desc" };

    case "year-old":
      return { model_year: "asc" };

    case "mileage-low":
      return { mileage: "asc" };

    case "mileage-high":
      return { mileage: "desc" };

    default:
      return { id: "desc" };
  }
}

export async function getCarById(id: string) {
  const allOptionCategories = await prisma.parser_optioncategory.findMany({
    where: { vechile: "CAR" },
    include: {
      parser_caroption: {
        orderBy: { encar_id: "asc" },
      },
    },
    orderBy: { name: "asc" },
  });

  const car = await prisma.parser_car.findUnique({
    where: { id: BigInt(id) },
    include: {
      parser_carmanufacturer: true,
      parser_carcolor: true,
      parser_carfuel: true,
      parser_carbody: true,
      parser_carphoto: {
        orderBy: { order_number: "asc" },
      },
      parser_cardiagnosis: true,
      parser_carrecord: true,
    },
  });

  if (!car) return null;
  
  const config = await prisma.parser_config.findFirst();

  let decodedOptions: any[] = [];

  // Обработка options
  let optionsArray: string[] = [];
  
  if (car.options) {
    // Вариант 1: Если options приходит как строка с квадратными скобками и кавычками
    if (car.options.startsWith('[')) {
      try {
        optionsArray = JSON.parse(car.options.replace(/'/g, '"'));
      } catch (error) {
        console.error('Ошибка парсинга options:', error);
        optionsArray = [];
      }
    } 
    // Вариант 2: Если options приходит как строка с запятыми
    else {
      optionsArray = car.options.split(',').map((c: string) => c.trim());
    }

    // Декодируем опции
    decodedOptions = await prisma.parser_caroption.findMany({
      where: {
        encar_id: { in: optionsArray },
        parser_optioncategory: { vechile: "CAR" },
      },
      include: {
        parser_optioncategory: true,
      },
      orderBy: {
        parser_optioncategory: { name: "asc" },
      },
    });
  }

  return {
    ...mapCarToDto(car),

    config: config
      ? {
          asiaServices: config.asia_services,
          dealerServices: config.dealer_services,
          koreaInvoice: config.korea_invoice,
          brokerCost: config.broker_cost,
          deliveryCost: config.delivery_cost,
          extraExpenses: config.extra_expenses,
          rate: config.rate,
        }
      : null,

    // Возвращаем массив кодов опций
    optionCodes: optionsArray,
    
    // Возвращаем декодированные опции с категориями
    options: decodedOptions.map((opt) => ({
      code: opt.encar_id,
      name: opt.name,
      category: opt.parser_optioncategory?.name,
    })),

    allOptions: allOptionCategories.map((category) => ({
      category: category.name,
      options: category.parser_caroption.map((opt) => ({
        code: opt.encar_id,
        name: opt.name,
      })),
    })),
  };
}


export async function getCars(filters: CarFiltersDto) {
  const page = filters.page ?? 1;
  const limit = filters.limit ?? 20;

  const where = buildWhere(filters);
  const orderBy = buildOrder(filters.sort);

  const cars = await prisma.parser_car.findMany({
    where,
    include: {
      parser_carmanufacturer: true,
      parser_carcolor: true,
      parser_carfuel: true,
      parser_carbody: true,
      parser_carphoto: {
        orderBy: { order_number: "asc" },
        take: 5,
      },
    },
    orderBy,
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.parser_car.count({ where });

  return {
    items: cars.map(mapCarToDto),
    total,
    page,
    limit,
  };
}
