import { Link } from "react-router-dom";
import infoIcon from "../../assets/images/available/info.svg";
import infoWhiteIcon from "../../assets/images/available/info_white.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

export default function CarCard({ car }) {
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function getFuelType(fuel) {
    const fuelMap = {
      Бензин: "бензин",
      Дизель: "дизель",
      "Бензин + Электричество": "бензин + электро",
      Электричество: "электро",
      Гибрид: "гибрид",
    };
    return fuelMap[fuel] || fuel;
  }

  function getMonthName(monthNumber) {
    if (!monthNumber) return "";

    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    const monthIndex =
      typeof monthNumber === "string"
        ? parseInt(monthNumber, 10) - 1
        : monthNumber - 1;

    return months[monthIndex] || "";
  }

  function getYearDeclension(year) {
    if (!year) return "";

    const yearNum = typeof year === "string" ? parseInt(year, 10) : year;

    const lastDigit = yearNum % 10;
    const lastTwoDigits = yearNum % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return "лет";
    }

    switch (lastDigit) {
      case 1:
        return "год";
      case 2:
      case 3:
      case 4:
        return "года";
      default:
        return "лет";
    }
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (car.images.length > 0) {
      // Предзагрузка следующего изображения
      const nextIndex = (activeIndex + 1) % car.images.slice(0, 5).length;
      const nextImg = new Image();
      nextImg.src = car.images[nextIndex];

      // Предзагрузка предыдущего изображения
      const prevIndex =
        activeIndex > 0 ? activeIndex - 1 : car.images.slice(0, 5).length - 1;
      const prevImg = new Image();
      prevImg.src = car.images[prevIndex];
    }
  }, [activeIndex, car.images]);

  return (
    <Link to={`/car/${car.id}`} className="block">
      <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_minmax(0,1fr)]">
        <div className="p-4 md:p-5 w-full md:w-[380px]">
          {car.images.length > 0 ? (
            <div className="relative rounded-[15px] w-full h-[230px] sm:h-[260px] md:h-[260px] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-opacity duration-300"
                src={car.images[activeIndex]}
                alt={car.model}
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 hidden md:flex">
                {car.images.slice(0, 5).map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-full cursor-pointer"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(0)}
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-between p-2 md:hidden">
                <button
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev > 0 ? prev - 1 : car.images.slice(0, 5).length - 1,
                    )
                  }
                  className="w-8 h-8 rounded-full bg-red-600/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Предыдущее фото"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev < car.images.slice(0, 5).length - 1 ? prev + 1 : 0,
                    )
                  }
                  className="w-8 h-8 rounded-full bg-red-600/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Следующее фото"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Пагинация (кружочки) */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                {car.images.slice(0, 5).map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      activeIndex === index ? "bg-red-600 w-3" : "bg-red-600/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-[15px] w-full h-[260px] bg-gray-800 flex items-center justify-center">
              <p className="text-gray-400">Нет фото</p>
            </div>
          )}
        </div>

        <div className="p-4 md:p-5 flex flex-col w-full min-w-0">
          <h4 className="text-white font-[500] md:text-[22px] mb-4">
            {car.brand} {car.model}
          </h4>

          <div className="text-white text-[16px] w-full">
            <div className="flex items-center gap-4 mb-2">
              <p>{car.trim || "Стандарт"}</p>
              {car.color && (
                <>
                  <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                  <p>{car.color}</p>
                </>
              )}
            </div>

            <div className="flex gap-2 text-[16px] flex-wrap text-gray-400 items-center">
              {car.horsepower ? (
                <>
                  <p>{car.horsepower} л.с.</p>
                  <span>•</span>
                </>
              ) : null}

              {/* Тип топлива */}
              {car.fuel && (
                <>
                  <p>{car.fuel}</p>
                  <span>•</span>
                </>
              )}

              {/* Объем двигателя */}
              {car.engineCapacity && (
                <>
                  <p>{car.engineCapacity} см³</p>
                  <span>•</span>
                </>
              )}

              {/* Пробег */}
              {car.mileage && (
                <>
                  <p>{car.mileage.toLocaleString()} км</p>
                  <span>•</span>
                </>
              )}

              {/* Месяц выпуска */}
              {car.releaseMonth && (
                <>
                  <p>{getMonthName(car.releaseMonth)}</p>
                  <span>•</span>
                </>
              )}

              {/* Год выпуска */}
              {car.releaseYear && (
                <p>
                  {car.releaseYear} {getYearDeclension(car.releaseYear)}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center w-full mt-12 lg:mt-26 relative">
            <h4 className="text-white font-[600] md:text-[28px] text-[22px]">
              {car.isReserved ? (
                <div className="flex flex-col items-start gap-1">
                  <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">
                    Авто забронирован
                  </span>
                  <div className="flex items-end gap-3 flex-wrap">
                    <span className="text-gray-400 line-through">
                      {formatNumber(car.finalPrice)} ₽
                    </span>
                    <p className="text-[#cecece] mb-2 text-[16px]">
                      до Владивостока
                    </p>
                  </div>
                </div>
              ) : car.finalPrice === 0 || !car.finalPrice ? (
                "Цена по запросу"
              ) : (
                <div className="flex items-end gap-3 flex-wrap">
                  {formatNumber(car.finalPrice)} ₽
                  <p className="text-[#cecece] mb-2 text-[16px]">
                    до Владивостока
                  </p>
                </div>
              )}
            </h4>
            {car.sellType != "Обычная покупка" ? (
              <div className="flex gap-2 flex-wrap relative">
                {/* Группа для кнопки "Лизинговый" и сообщения */}
                <div className="group relative">
                  {/* Сообщение теперь позиционируется относительно этой группы */}
                  <div className="bg-[#3b414e] absolute bottom-14 right-0  w-[300px] md:w-[350px] rounded-[15px] p-3 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 pointer-events-none">
                    <p className="text-sm">
                      Цена на такой автомобиль может быть выше на 20-50% от
                      цены, заявленной на Encar. Запросить расчёт актуальной
                      стоимости вы можете со страницы автомобиля
                    </p>
                  </div>

                  <button className="text-[10px] flex-wrap sm:text-[16px] font-[400] p-2 xl:p-3 bg-[#3b414e] text-white flex items-center gap-2 rounded-[10px]">
                    <img
                      className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px]"
                      src={infoWhiteIcon}
                      alt="infoIcon"
                    />
                    Лизинговый
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
