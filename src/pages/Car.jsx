import ImageSwiper from "../components/Swiper.jsx";
import drawing from "../assets/images/car/drawing.png";
import d1 from "../assets/images/car/d1.svg";
import d2 from "../assets/images/car/d2.svg";
import d3 from "../assets/images/car/d3.svg";
import d4 from "../assets/images/car/d4.svg";
import d5 from "../assets/images/car/d5.svg";
import d6 from "../assets/images/car/d6.svg";
import d7 from "../assets/images/car/d7.svg";

import check from "../assets/images/car/check.svg";
import shield from "../assets/images/car/shield.svg";
import x from "../assets/images/car/x.svg";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarById } from "../api/cars";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Car() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [similarCars, setSimilarCars] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true); // Добавляем состояние загрузки
  const [similarLoading, setSimilarLoading] = useState(false); // Для похожих авто

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    getCarById(id)
      .then(setCar)
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!car?.manufacturerKey) return;

    setSimilarLoading(true);
    fetch(
      `http://31-177-82-93.vps-ptr.clients.spaceweb.ru/api/cars?manufacturer=${car.manufacturerKey}&limit=10`,
    )
      .then((res) => res.json())
      .then((data) => {
        const items = data.items || [];
        const filtered = items.filter((item) => item.id !== car.id);
        setSimilarCars(filtered);
      })
      .finally(() => setSimilarLoading(false));
  }, [car]);

  useEffect(() => {
    if (!car?.allOptions) return;
    if (car.allOptions.length > 0) {
      setActiveCategory(car.allOptions[0].category);
    }
  }, [car]);

  // Показываем спиннер пока загружается основная информация
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!car) {
    return <p className="text-white p-10">Автомобиль не найден</p>;
  }

  if (!car.config) {
    throw new Error("config missing from API");
  }

  const activeCodes = new Set(car.options.map((o) => o.code));

  const iconMap = {
    Безопасность: d1,
    Комфорт: d2,
    Салон: d3,
    "Комфорт и мультимедиа": d4,
    Обзор: d5,
    "Внешние элементы": d6,
    "Экстерьер и интерьер": d7,
  };

  const icons = car.allOptions.map((category) => {
    const count = category.options.length;

    return {
      icon: iconMap[category.category],
      title: category.category,
      num: count,
    };
  });

  const images = car.images && car.images.length ? car.images : [];

  let characteristics1 = [
    { title: "Марка", main_text: car.brand },
    { title: "Модель", main_text: car.model },
    { title: "Комплектация", main_text: car.trim },
    { title: "Тип кузова", main_text: car.body },
    { title: "Цвет", main_text: car.color },
  ];

  let characteristics2 = [
    { title: "Год", main_text: car.year },
    { title: "Пробег", main_text: car.mileage + " км" },
    { title: "Трансмиссия", main_text: car.transmission },
    { title: "Топливо", main_text: car.fuel },
    { title: "Привод", main_text: car.drive },
  ];

  const servicesTotal =
    car.config.asiaServices +
    car.config.dealerServices +
    car.config.brokerCost +
    car.config.deliveryCost +
    car.config.extraExpenses;

  return (
    <main className="my-30 2xl:px-20 md:px-10 px-5">
      <section className="flex justify-between grid md:grid-cols-2 grid-cols-1">
        <div className="flex">
          <ImageSwiper images={images} />
        </div>

        <div className="text-white py-10 lg:ml-10 md:ml-5">
          <p className="font-[400] 2xl:text-[44px] lg:text-[35px] md:text-[25px] text-[22px]">
            {car.brand} {car.model}
          </p>
          <p className="font-[400] text-[16px] py-3 opacity-[80%]">
            {car.trim}
          </p>
          <div className="bg-[#FFFFFF09] p-5 my-3 rounded-[10px]">
            <div className="flex justify-between py-3 items-center bg-[#FFFFFF09] p-3 rounded-[15px]">
              <p className="text-[16px] lg:text-[18px] font-[400]">
                Цена в Корее
              </p>
              {car.ruPrice ? (
                <p className="text-[16px] lg:text-[18px] font-[400]">
                  ~ {car.ruPrice?.toLocaleString()} ₽
                </p>
              ) : (
                <p>Цена по запросу</p>
              )}
            </div>
            <div className="flex justify-between py-2 items-center">
              <p className="text-[16px] lg:text-[18px] font-[400]">
                Утилизационный сбор
              </p>
              <p className="text-[16px] lg:text-[18px] font-[400]">
                ~ {car.recyclingFee?.toLocaleString()} ₽
              </p>
            </div>
            <div className="flex justify-between py-2 items-center">
              <p className="text-[16px] lg:text-[18px] font-[400]">
                Таможенные платежи
              </p>
              <p className="text-[16px] lg:text-[18px] font-[400]">
                ~ {car.customsDuty?.toLocaleString()} ₽
              </p>
            </div>
            <div className="flex justify-between py-2 items-center">
              <p className="text-[16px] lg:text-[18px] font-[400]">
                Доставка до Владивостока
              </p>
              <p className="text-[16px] lg:text-[18px] font-[400]">30 000 ₽</p>
            </div>
          </div>
          {car.finalPrice ? (
            <p className="text-[#DB1E1E] font-[500] text-[22px] py-3">
              {car.finalPrice?.toLocaleString()} ₽
            </p>
          ) : (
            <p className="text-[#DB1E1E] font-[500] text-[22px] py-3">
              Цена по запросу
            </p>
          )}
          <div className="flex gap-3 grid grid-cols-1 lg:grid-cols-2">
            <a href="/contacts/#feedback-form">
              <button className="font-[600] uppercase rounded-[5px] p-2 w-full text-[16px] text-[#101012] bg-white">
                Оставить заявку
              </button>
            </a>
            <a href="/cars/fl">
              <button className="font-[600] uppercase rounded-[5px] p-2 w-full text-[16px] text-white border-[1px] border-white bg-[#101012]">
                Схема работы
              </button>
            </a>
          </div>
          <div className="mt-5">
            <a
              className="text-[#d2d2d2] hover:text-[#DB1E1E]"
              href={"https://fem.encar.com/cars/detail/" + car.encar_id}
              target="_blank"
            >
              Оригинал объявления на Encar →
            </a>
          </div>
        </div>
      </section>
      <section className="mt-30">
        <p className="font-[400] text-[28px] text-white">Состояние авто</p>

        <div className="flex justify-center grid-cols-2 gap-6 mt-10">
          <div>
            <img className="w-[1200px]" src={drawing} alt="drawing" />
          </div>
        </div>

        <div className="flex justify-between grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-0 gap-5 bg-[#FFFFFF09] p-3 rounded-[15px] mt-6">
          <div className="text-white flex">
            <p className="w-[25px] h-[25px] mr-2 flex justify-center items-center rounded-[50%] bg-[#E60F2D] text-white">
              X
            </p>
            <p>Замена\окрас</p>
          </div>

          <div className="text-white flex">
            <p className="w-[25px] h-[25px] mr-2 flex justify-center items-center rounded-[50%] bg-[#649EDE] text-white">
              W
            </p>
            <p>Окрас\сварка</p>
          </div>

          <div className="text-white flex">
            <p className="w-[25px] h-[25px] mr-2 flex justify-center items-center rounded-[50%] bg-[#E8912A] text-white">
              C
            </p>
            <p>Коррозия</p>
          </div>

          <div className="text-white flex">
            <p className="w-[25px] h-[25px] mr-2 flex justify-center items-center rounded-[50%] bg-[#7288A0] text-white">
              A
            </p>
            <p>Коррозия</p>
          </div>

          <div className="text-white flex">
            <p className="w-[25px] h-[25px] mr-2 flex justify-center items-center rounded-[50%] bg-[#737761] text-white">
              U
            </p>
            <p>Неровности</p>
          </div>

          <div className="text-white flex">
            <p className="w-[25px] h-[25px] mr-2 flex justify-center items-center rounded-[50%] bg-[#A68174] text-white">
              T
            </p>
            <p>Повреждения</p>
          </div>
        </div>
      </section>

      <section className="mt-30">
        <p className="font-[400] text-[28px] text-white">
          Комплектация {car.trim}
        </p>
        <p className="text-[16px] font-[400] text-white opacity-[80%]">
          {car.brand} {car.model}, {car.releaseYear}
        </p>

        {/* Аккордеон */}
        <div className="mt-5 space-y-3">
          {car.allOptions.map((category) => {
            const isOpen = activeCategory === category.category;
            const categoryOptions = category.options || [];
            const hasOptions = categoryOptions.length > 0;

            // Подсчитываем количество доступных опций в этой категории
            const availableCount = categoryOptions.filter((opt) =>
              activeCodes.has(opt.code),
            ).length;

            return (
              <div
                key={category.category}
                className="rounded-[20px] bg-[#FFFFFF09] overflow-hidden"
              >
                {/* Заголовок категории (кликабельный) */}
                <button
                  onClick={() =>
                    setActiveCategory(isOpen ? null : category.category)
                  }
                  className="w-full flex items-center justify-between p-5 text-white hover:bg-[#FFFFFF15] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={iconMap[category.category]}
                      alt="shield"
                      className="w-0 h-0 sm:w-6 sm:h-6"
                    />
                    <p className="text-[16px] sm:text-[22px] font-[400]">
                      {category.category}
                    </p>
                    {availableCount > 0 && (
                      <span className="text-sm bg-red-600 px-2 py-0.5 rounded-full">
                        {availableCount}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-[16px] font-[400] opacity-[50%]">
                      {categoryOptions.length}
                    </p>
                    {isOpen ? (
                      <ChevronUp size={24} className="opacity-50" />
                    ) : (
                      <ChevronDown size={24} className="opacity-50" />
                    )}
                  </div>
                </button>

                {/* Контент категории (открывается/закрывается) */}
                {isOpen && hasOptions && (
                  <div className="p-5 pt-0 border-t border-[#FFFFFF1A] mt-2">
                    <div className="flex flex-wrap gap-3">
                      {categoryOptions.map((opt) => {
                        const has = activeCodes.has(opt.code);

                        return (
                          <div
                            key={opt.code}
                            className={`flex items-center gap-3 border-2 py-3 px-5 rounded-[10px] transition-all ${
                              has
                                ? "border-red-600/50 bg-red-600/10"
                                : "border-[#FFFFFF1A] opacity-50"
                            }`}
                          >
                            <img
                              src={has ? check : x}
                              alt={has ? "есть" : "нет"}
                              className="w-5 h-5"
                            />
                            <p className="text-[16px] font-[400] text-white">
                              {opt.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Сообщение если нет опций в категории */}
                {isOpen && !hasOptions && (
                  <div className="p-5 pt-0 text-center text-gray-400">
                    Нет доступных опций в этой категории
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-30">
        <p className="font-[400] text-[28px] text-white">Похожие авто</p>

        {/* Спиннер для похожих авто */}
        {similarLoading && (
          <div className="flex justify-center items-center py-10">
            <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Контент похожих авто */}
        {!similarLoading && (
          <div className="flex gap-6 mt-5 overflow-x-auto scrollbar-hide pb-2">
            {similarCars.map((item) => (
              <a
                href={`/car/${item.id}`}
                key={item.id}
                className="w-[280px] flex-shrink-0"
              >
                <div className="text-white">
                  <img
                    src={item.images?.[0]}
                    className="rounded-[15px] object-cover h-[210px] w-full"
                    alt={item.model}
                  />
                  {item.finalPrice ? (
                    <p className="text-[22px] font-[500] py-1">
                      {item.finalPrice?.toLocaleString()} ₽
                    </p>
                  ) : (
                    <p className="text-[22px] font-[500] py-1">Цена по запросу</p>
                  )}
                  <p className="text-[18px] font-[500]">
                    {item.brand} {item.model}
                  </p>
                  <p className="text-[16px] font-[500] opacity-[80%]">
                    {item.year}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Сообщение если нет похожих авто */}
        {!similarLoading && similarCars.length === 0 && (
          <p className="text-white text-center py-10 opacity-70">
            Похожие автомобили не найдены
          </p>
        )}
      </section>
    </main>
  );
}
