import { useEffect, useMemo, useRef, useState } from "react";

import MainTitleText from "../components/utilities/MainTitleText.jsx";
import photoCatalog from "../assets/images/catalog/photo.png";
import FeedBlackForm from "../components/feedBackForm/FeedBlackForm.jsx";
import EdgeFireEffect from "../components/utilities/EdgeFireEffect.jsx";
import settingsSliders from "../assets/images/catalog/settingsSliders.svg";
import { useSmoothScroll } from "../components/useSmoothScroll";
import { getCars } from "../api/cars";
import CarCard from "../components/catalog/CarCard";

const DEFAULT_FILTERS = {
  manufacturer: "",
  model: "",
  fuel: "",
  body: "",
  transmission: "",
  color: "",
  priceStart: "",
  priceEnd: "",
  mileageStart: "",
  mileageEnd: "",
  yearStart: "",
  yearEnd: "",
  isValid: false,
  sort: "year-new",
  page: 1,
  limit: 12,
};

const MODELS_BY_MANUFACTURER = {
  "": [
    { value: "", label: "Все" },
    { value: "creta", label: "Hyundai Creta" },
    { value: "solaris", label: "Hyundai Solaris" },
    { value: "tucson", label: "Hyundai Tucson" },
    { value: "santa_fe", label: "Hyundai Santa Fe" },
    { value: "elantra", label: "Hyundai Elantra" },
    { value: "sonata", label: "Hyundai Sonata" },
    { value: "palisade", label: "Hyundai Palisade" },
  ],
  bmw: [{ value: "bmw", label: "Все" }],
  kia: [{ value: "kia", label: "Все" }],
};

function buildQuery(filters) {
  const query = {
    page: filters.page,
    limit: filters.limit,
    sort: filters.sort,
  };

  const keys = [
    "manufacturer",
    "model",
    "fuel",
    "body",
    "transmission",
    "color",
    "priceStart",
    "priceEnd",
    "mileageStart",
    "mileageEnd",
    "yearStart",
    "yearEnd",
  ];

  for (const key of keys) {
    const v = filters[key];
    if (v !== "" && v !== null && v !== undefined) {
      query[key] = v;
    }
  }

  if (filters.isValid === true) {
    query.isValid = true;
  }

  return query;
}

function getPaginationWindow({ page, totalPages, windowSize = 7 }) {
  if (totalPages <= windowSize) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const half = Math.floor(windowSize / 2);
  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, page + half);

  if (end - start + 1 < windowSize) {
    if (start === 1) {
      end = Math.min(totalPages, start + windowSize - 1);
    } else if (end === totalPages) {
      start = Math.max(1, end - windowSize + 1);
    }
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash.slice(1).toLowerCase();

  if (hash) {
    DEFAULT_FILTERS.manufacturer = hash;

    const manufacturerSelect = document.querySelector(
      'select[data-filter="manufacturer"]',
    );
    const modelSelect = document.querySelector('select[data-filter="model"]');

    if (manufacturerSelect) {
      manufacturerSelect.value = hash;
    }
    if (modelSelect) {
      modelSelect.value = hash;
    }

    const query = buildQuery(DEFAULT_FILTERS);
  }
});

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function FilterPanel({ filters, setFilters }) {
  const models =
    MODELS_BY_MANUFACTURER[filters.manufacturer] ?? MODELS_BY_MANUFACTURER[""];

  return (
    <div className="px-5 py-6 bg-[#FFFFFF09] rounded-[30px] w-fit h-full overflow-y-auto">
      <div className="pb-6">
        <h4 className="text-white font-[400]">Марка</h4>
        <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
          <select
            value={filters.manufacturer}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                manufacturer: e.target.value,
                model: "",
                page: 1,
              }))
            }
            className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
          >
            <option value="">Все</option>
            <option value="bmw">BMW</option>
            <option value="kia">KIA</option>
            <option value="honda">Honda</option>
            <option value="zeekr">Zeekr</option>
          </select>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Модель</h4>
        <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
          <select
            value={filters.model}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                model: e.target.value,
                page: 1,
              }))
            }
            className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
          >
            {models.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Топливо</h4>
        <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
          <select
            value={filters.fuel}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                fuel: e.target.value,
                page: 1,
              }))
            }
            className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
          >
            <option value="">Любое</option>
            <option value="petrol">Бензин</option>
            <option value="diesel">Дизель</option>
            <option value="hybrid">Гибрид</option>
            <option value="electric">Электро</option>
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Коробка передач</h4>
        <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
          <select
            value={filters.transmission}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                transmission: e.target.value,
                page: 1,
              }))
            }
            className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
          >
            <option value="">Любая</option>
            <option value="automatic">Автомат</option>
            <option value="manual">Механика</option>
            <option value="robot">Робот</option>
            <option value="variator">Вариатор</option>
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Цвет</h4>
        <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
          <select
            value={filters.color}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                color: e.target.value,
                page: 1,
              }))
            }
            className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
          >
            <option value="">Любой</option>
            <option value="beige">Бежевый</option>
            <option value="white">Белый</option>
            <option value="white_bicolor">Белый двухцветный</option>
            <option value="turquoise">Бирюзовый</option>
            <option value="burgundy">Бордовый</option>
            <option value="light_blue">Голубой</option>
            <option value="other">Другое</option>
            <option value="yellow">Жёлтый</option>
            <option value="pearl">Жемчужный</option>
            <option value="pearl_bicolor">Жемчужный двухцветный</option>
            <option value="green">Зелёный</option>
            <option value="golden">Золотистый</option>
            <option value="golden_bicolor">Золотистый двухцветный</option>
            <option value="brown">Коричневый</option>
            <option value="brown_bicolor">Коричневый двухцветный</option>
            <option value="red">Красный</option>
            <option value="orange">Оранжевый</option>
            <option value="pink">Розовый</option>
            <option value="light_green">Салатовый</option>
            <option value="light_golden">Светло-золотистый</option>
            <option value="light_silver">Светло-серебристый</option>
            <option value="silver_gray">Серебристо-серый</option>
            <option value="silver">Серебристый</option>
            <option value="silver_bicolor">Серебристый двухцветный</option>
            <option value="gray">Серый</option>
            <option value="blue">Синий</option>
            <option value="dark_green">Тёмно-зелёный</option>
            <option value="purple">Фиолетовый</option>
            <option value="black">Чёрный</option>
            <option value="black_bicolor">Чёрный двухцветный</option>
          </select>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Кузов</h4>
        <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
          <select
            value={filters.body}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                body: e.target.value,
                page: 1,
              }))
            }
            className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
          >
            <option value="">Любой</option>
            <option value="sedan">Седан</option>
            <option value="hatchback">Хэтчбек</option>
            <option value="universal">Универсал</option>
            <option value="suv">Внедорожник (SUV)</option>
            <option value="crossover">Кроссовер</option>
            <option value="coupe">Купе</option>
            <option value="cabrio">Кабриолет</option>
            <option value="minivan">Минивэн</option>
            <option value="pickup">Пикап</option>
          </select>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Привод</h4>
        <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
          <select
            value={filters.drive}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                drive: e.target.value,
                page: 1,
              }))
            }
            className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
          >
            <option value="">Любой</option>
            <option value="front">Передний</option>
            <option value="rear">Задний</option>
            <option value="full">Полный</option>
            <option value="plug-in-full">Подключаемый полный</option>
          </select>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Цена, ₽</h4>
        <div className="flex gap-4 mt-3">
          <input
            className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
            type="number"
            min="0"
            placeholder="от"
            value={filters.priceStart}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceStart: e.target.value,
                page: 1,
              }))
            }
          />
          <input
            className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
            type="number"
            min="0"
            placeholder="до"
            value={filters.priceEnd}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceEnd: e.target.value,
                page: 1,
              }))
            }
          />
        </div>

        <div className="flex mt-4">
          <label className="flex items-start text-white py-2">
            <input
              type="checkbox"
              checked={filters.isValid}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  isValid: e.target.checked,
                  page: 1,
                }))
              }
              className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
            />
            <span
              className="relative flex-shrink-0 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 border-[2px] border-[#FBFFFE80] rounded transition-all duration-200 mr-2 mt-0.5
              after:content-[''] after:absolute after:hidden after:left-1/2 after:top-1/2 
              after:w-1.5 after:h-2 sm:after:w-1.5 sm:after:h-2.5 after:border-white after:border-r-2 after:border-b-2 
              after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45
              peer-checked:after:block
              peer-checked:bg-[#fb2c36] peer-checked:border-[#fb2c36]
              peer-focus:ring-1"
            />
            <span className="leading-tight mt-1 font-[400] text-[18px]">
              Самые выгодные авто
            </span>
          </label>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Пробег, км</h4>
        <div className="flex gap-4 mt-3">
          <input
            className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
            type="number"
            placeholder="от"
            min="0"
            value={filters.mileageStart}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                mileageStart: e.target.value,
                page: 1,
              }))
            }
          />
          <input
            className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
            type="number"
            min="0"
            placeholder="до"
            value={filters.mileageEnd}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                mileageEnd: e.target.value,
                page: 1,
              }))
            }
          />
        </div>
      </div>

      <div className="pb-6">
        <h4 className="text-white font-[400]">Год производства</h4>
        <div className="flex gap-4 mt-3">
          <input
            className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
            type="number"
            min="0"
            placeholder="от"
            value={filters.yearStart}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                yearStart: e.target.value,
                page: 1,
              }))
            }
          />
          <input
            className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
            type="number"
            min="0"
            placeholder="до"
            value={filters.yearEnd}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                yearEnd: e.target.value,
                page: 1,
              }))
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => setFilters(DEFAULT_FILTERS)}
          className="bg-[#FFFFFF0D] uppercase text-[18px] border-white rounded-[10px] py-3 px-4 text-[#FBFFFE] font-[600] hover:text-[#1E1E1E] hover:bg-white transition-all duration-500 ease-in-out"
        >
          сбросить фильтр
        </button>
      </div>
    </div>
  );
}

export default function Catalog() {
  const selectCarRef = useSmoothScroll("#select-car", 100);
  const aboutCarRef = useSmoothScroll("#about-car", 100);

  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const query = useMemo(() => buildQuery(filters), [filters]);

  useEffect(() => {
    let alive = true;

    setLoading(true);
    setErrorText("");

    getCars(query)
      .then((data) => {
        if (!alive) return;
        setCars(data.items);
        setTotal(data.total);
      })
      .catch(() => {
        if (!alive) return;
        setCars([]);
        setTotal(0);
        setErrorText("Ошибка загрузки каталога");
      })
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  const totalPages = Math.max(1, Math.ceil(total / filters.limit));
  const pageNumbers = useMemo(
    () =>
      getPaginationWindow({ page: filters.page, totalPages, windowSize: 7 }),
    [filters.page, totalPages],
  );

  return (
    <main className="lg:pt-60 md:pt-40 pt-25 bg-[#030305] overflow-x-hidden">
      <div ref={selectCarRef}>
        <MainTitleText>
          <span className="text-brand-normal">Каталог</span>
        </MainTitleText>
      </div>

      <EdgeFireEffect />

      <div className="flex md:px-10 px-4 mb-10 pt-15 lg:pt-25 items-start overflow-hidden">
        <div
          className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <section
          ref={menuRef}
          className={`fixed top-0 left-0 h-full lg:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ zIndex: 111 }}
        >
          <div className="px-5 py-6 bg-[#FFFFFF09] backdrop-blur-xl w-[370px] h-full overflow-y-auto">
            <div className="flex justify-end items-center mb-1">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#DB1E1E] text-[38px] hover:text-white"
              >
                ×
              </button>
            </div>

            <FilterPanel filters={filters} setFilters={setFilters} />
          </div>
        </section>

        <section className="hidden lg:block min-w-[370px] pr-10">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </section>

        <section className="w-full md:pl-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded-[10px] lg:hidden z-10 bg-[#DB1E1E] hover:bg-[#C11A1A] p-2 w-10 h-10 flex items-center justify-center transition-colors"
              >
                <img src={settingsSliders} alt="settingsSliders" />
              </button>

              <h4 className="text-white md:block hidden font-[500] text-[18px]">
                Число автомобилей: <b>{formatNumber(total)}</b>
              </h4>
            </div>

            <div className="flex items-center">
              <p className="text-[#9E9E9E] pr-5 md:block hidden">сортировка:</p>

              <div className="mt-2 px-3 rounded-[10px] border-[2px] border-[#DB1E1E] relative">
                <select
                  value={filters.sort}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      sort: e.target.value,
                      page: 1,
                    }))
                  }
                  className="text-white py-2 outline-0 w-[230px] appearance-none bg-transparent"
                >
                  <option value="year-new">по году выпуска - новее</option>
                  <option value="year-old">по году выпуска - старее</option>
                  <option value="price-low">по цене - дешевле</option>
                  <option value="price-high">по цене - дороже</option>
                  <option value="mileage-low">по пробегу - меньше</option>
                  <option value="mileage-high">по пробегу - больше</option>
                </select>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3">
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-[#c0c0c0] text-center mb-2">
              Данное предложение не является публичной офертой и носит
              информационный характер. Актуальную стоимость и условия уточняйте
              у менеджеров*
            </p>
            <hr className="text-brand-normal" />
          </div>
{/* 
          <div>
            <div class="CjgsploSo2 _7D6_wyaCj_ UTcKIXXB9e">
              <div class="zi33HZhiq7">
                <div class="zf4uVWzcAo">
                  <div class="Io5PbA1tmf"></div>
                </div>
                <div class="di4piYWKJl FpzNHQHPd5 q4lRjtL9L0">
                  <div class="kLTvHrRYXt"></div>
                  <div class="jIPTzGakl5 yvfUIREL8M"></div>
                  <div class="jIPTzGakl5 Q4TFVmoM6x"></div>
                  <div class="jIPTzGakl5 guRwko00QA"></div>
                  <div class="jIPTzGakl5 TKla_t8hiV"></div>
                  <div class="jIPTzGakl5 ZeY2c4N8M7"></div>
                  <div class="jIPTzGakl5 fRwkr7finm"></div>
                  <div class="jIPTzGakl5 T_gs3M9Gqm"></div>
                  <div class="jIPTzGakl5 sYgLoeNojr"></div>
                  <div class="jIPTzGakl5 panel_006039"></div>
                  <div class="jIPTzGakl5 panel_006040"></div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>
            {`
              .area {
                position: relative;
              }
              .link_service {
                display: block;
                position: relative;
                margin: -25px -25px 0;
                padding: 25px 25px 10px;
                .tit_service {
                  padding-bottom: 10px;
                  font-size: 12px;
                  color: #666;
                }
                // &:after{content:'';position:absolute;top:30px;right:25px;width:8px;height:8px;margin:0 auto;border-top:1px solid #666;border-right:1px solid #666;transform:rotate(45deg)} PL-645 후속으로 서비스 소개 페이지 변경 전까지 주석
                .desc_service {
                  font-size: 18px;
                  color: #333;
                }
              }
              .loading_aera {
                position: relative;
                z-index: 1;
                width: 253px;
                height: 171px;
                margin: 0 auto;
              }
              .image {
                position: relative;
                width: 253px;
                height: 171px;
                margin: 0 auto;
              }
              .explain {
                font-size: 16px;
                color: #333;
                text-align: center;
                .item {
                  display: inline-block;
                }
                .item:before {
                  content: "";
                  display: inline-block;
                  width: 2px;
                  height: 2px;
                  margin: 0 7px;
                  background: #d9d9d9;
                  vertical-align: middle;
                }
                .item:first-child:before {
                  display: none;
                }
                .normal {
                  font-weight: bold;
                  color: #3eae41;
                }
                .replacement {
                  font-weight: bold;
                  color: #001782;
                }
              }
              .view2.area {
                margin-top: 20px;
              }

              .area_frame {
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 1s ease-out;
                .frame {
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 1;
                  width: 100%;
                  height: 100%;
                  background-size: 253px;
                  background-repeat: no-repeat;
                  background-position: 0 0;
                }
                .frame:before {
                  display: block;
                  content: "";
                  position: absolute;
                  width: 0;
                  height: 100%;
                  background-size: 253px;
                  background-repeat: no-repeat;
                  background-position: 0 0;
                  transform-origin: 0 0;
                  transform: rotate(-46deg);
                  transition: all 1.5s ease-out 1s;
                }
              }
              .area_frame.active {
                opacity: 1;
                .frame:before {
                  width: 100%;
                }
              }
              .area_panel {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 1s ease-out;
                .base {
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 5;
                  width: 100%;
                  height: 100%;
                  background-size: 253px;
                  background-repeat: no-repeat;
                  background-position: 0 0;
                }
                .item {
                  display: block;
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background-size: 253px;
                  background-repeat: no-repeat;
                  background-position: 0 0;
                  transition: all 0.5s ease-out 1s;
                  &:after {
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 30;
                    width: 18px;
                    height: 18px;
                    background: url("/assets/images/cars/inspect/ico_exchange.png")
                      no-repeat 0 0;
                    background-size: 18px;
                    opacity: 0;
                    transition: opacity 0.3s ease-out 1.5s;
                  }
                }
              }
              .area_panel.active {
                opacity: 1;
              }
              .area_panel.motion .item.active {
                transform: translate(0);
                &:after {
                  opacity: 1;
                }
              }
              .panel_006003 {
                z-index: 10;
              }
              .panel_006006 {
                z-index: 8;
              }
              .panel_006009 {
                z-index: 2;
              }
              .panel_006018 {
                z-index: 2;
              }
              .panel_006023 {
                z-index: 2;
              }
              .panel_006026 {
                z-index: 10;
              }
              .panel_006027 {
                z-index: 2;
              }
              .panel_006033 {
                z-index: 12;
              }

              //sedan
              .sedan .frame {
                background-image: url("/assets/images/cars/inspect/sedan/frame_0.png");
              }
              .sedan .frame:before {
                left: -23px;
                top: 117px;
                background-image: url("/assets/images/cars/inspect/sedan/frame_1.png");
              }
              .sedan .base {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_f_001.png");
              }
              .sedan .panel_006003 {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_p_006003.png");
                transform: translate(-18px, -16px);
                &:after {
                  left: 150px;
                  top: 96px;
                }
              }
              .sedan .panel_006006 {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_p_006006.png");
                transform: translate(-23px, -14px);
                &:after {
                  left: 192px;
                  top: 79px;
                }
              }
              .sedan .panel_006009 {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_p_006009.png");
                transform: translate(-2px, 11px);
                &:after {
                  left: 188px;
                  top: 9px;
                }
              }
              .sedan .panel_006018 {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_p_006018.png");
                transform: translate(10px, 14px);
                &:after {
                  left: 122px;
                  top: 13px;
                }
              }
              .sedan .panel_006023 {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_p_006023.png");
                transform: translate(13px, 14px);
                &:after {
                  left: 82px;
                  top: 31px;
                }
              }
              .sedan .panel_006026 {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_p_006026.png");
                transform: translate(0, 11px);
                &:after {
                  left: 53px;
                  top: 72px;
                }
              }
              .sedan .panel_006027 {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_p_006027.png");
                transform: translate(17px, 12px);
                &:after {
                  left: 37px;
                  top: 51px;
                }
              }
              .sedan .panel_006033 {
                background-image: url("/assets/images/cars/inspect/sedan/inspect_p_006033.png");
                transform: translate(-13px, -18px);
                &:after {
                  left: 107px;
                  top: 116px;
                }
              }

              //suv
              .suv .frame {
                background-image: url("/assets/images/cars/inspect/suv/frame_0.png");
              }
              .suv .frame:before {
                left: -16px;
                top: 114px;
                background-image: url("/assets/images/cars/inspect/suv/frame_1.png");
              }
              .suv .base {
                background-image: url("/assets/images/cars/inspect/suv/inspect_f_001.png");
              }
              .suv .panel_006003 {
                background-image: url("/assets/images/cars/inspect/suv/inspect_p_006003.png");
                transform: translate(-15px, -15px);
                &:after {
                  left: 150px;
                  top: 96px;
                }
              }
              .suv .panel_006006 {
                background-image: url("/assets/images/cars/inspect/suv/inspect_p_006006.png");
                transform: translate(-19px, -13px);
                &:after {
                  left: 192px;
                  top: 79px;
                }
              }
              .suv .panel_006009 {
                background-image: url("/assets/images/cars/inspect/suv/inspect_p_006009.png");
                transform: translate(-3px, 14px);
                &:after {
                  left: 188px;
                  top: 9px;
                }
              }
              .suv .panel_006018 {
                background-image: url("/assets/images/cars/inspect/suv/inspect_p_006018.png");
                transform: translate(10px, 12px);
                &:after {
                  left: 122px;
                  top: 13px;
                }
              }
              .suv .panel_006023 {
                background-image: url("/assets/images/cars/inspect/suv/inspect_p_006023.png");
                transform: translate(14px, 12px);
                &:after {
                  left: 82px;
                  top: 31px;
                }
              }
              .suv .panel_006026 {
                background-image: url("/assets/images/cars/inspect/suv/inspect_p_006026.png");
                transform: translate(0, 9px);
                &:after {
                  left: 53px;
                  top: 72px;
                }
              }
              .suv .panel_006027 {
                background-image: url("/assets/images/cars/inspect/suv/inspect_p_006027.png");
                transform: translate(17px, 13px);
                &:after {
                  left: 37px;
                  top: 51px;
                }
              }
              .suv .panel_006033 {
                background-image: url("/assets/images/cars/inspect/suv/inspect_p_006033.png");
                transform: translate(-10px, -17px);
                &:after {
                  left: 107px;
                  top: 116px;
                }
              }

              //truck
              .truck .frame {
                background-image: url("/assets/images/cars/inspect/truck/frame_0.png");
              }
              .truck .frame:before {
                left: -30px;
                top: 106px;
                background-image: url("/assets/images/cars/inspect/truck/frame_1.png");
              }
              .truck .base {
                background-image: url("/assets/images/cars/inspect/truck/inspect_f_001.png");
              }
              .truck .panel_006003 {
                background-image: url("/assets/images/cars/inspect/truck/inspect_p_006003.png");
                transform: translate(-16px, -16px);
                &:after {
                  left: 95px;
                  top: 104px;
                }
              }
              .truck .panel_006006 {
                background-image: url("/assets/images/cars/inspect/truck/inspect_p_006006.png");
                transform: translate(-17px, -15px);
                &:after {
                  left: 138px;
                  top: 88px;
                }
              }
              .truck .panel_006018 {
                background-image: url("/assets/images/cars/inspect/truck/inspect_p_006018.png");
                transform: translate(11px, 11px);
                &:after {
                  left: 73px;
                  top: 13px;
                }
              }
              .truck .panel_006023 {
                background-image: url("/assets/images/cars/inspect/truck/inspect_p_006023.png");
                transform: translate(11px, 11px);
                &:after {
                  left: 28px;
                  top: 33px;
                }
              }
              .truck .panel_006026 {
                background-image: url("/assets/images/cars/inspect/truck/inspect_p_006026.png");
                transform: translate(8px, -3px);
                &:after {
                  left: 9px;
                  top: 96px;
                }
              }
              .truck .panel_006027 {
                background-image: url("/assets/images/cars/inspect/truck/inspect_p_006027.png");
                transform: translate(13px, 8px);
                &:after {
                  left: 2px;
                  top: 62px;
                }
              }
              .truck .panel_006033 {
                background-image: url("/assets/images/cars/inspect/truck/inspect_p_006033.png");
                transform: translate(-12px, -16px);
                &:after {
                  left: 58px;
                  top: 120px;
                }
              }

              //truck2
              .truck2 .frame {
                background-image: url("/assets/images/cars/inspect/truck2/frame_0.png");
              }
              .truck2 .frame:before {
                left: -34px;
                top: 102px;
                background-image: url("/assets/images/cars/inspect/truck2/frame_1.png");
              }
              .truck2 .base {
                background-image: url("/assets/images/cars/inspect/truck2/inspect_f_001.png");
              }
              .truck2 .panel_006003 {
                background-image: url("/assets/images/cars/inspect/truck2/inspect_p_006003.png");
                transform: translate(-17px, -17px);
                &:after {
                  left: 104px;
                  top: 100px;
                }
              }
              .truck2 .panel_006023 {
                background-image: url("/assets/images/cars/inspect/truck2/inspect_p_006023.png");
                transform: translate(11px, 11px);
                &:after {
                  left: 29px;
                  top: 28px;
                }
              }
              .truck2 .panel_006026 {
                background-image: url("/assets/images/cars/inspect/truck2/inspect_p_006026.png");
                transform: translate(8px, -5px);
                &:after {
                  left: 12px;
                  top: 96px;
                }
              }
              .truck2 .panel_006027 {
                background-image: url("/assets/images/cars/inspect/truck2/inspect_p_006027.png");
                transform: translate(14px, 8px);
                &:after {
                  left: 4px;
                  top: 57px;
                }
              }
              .truck2 .panel_006033 {
                background-image: url("/assets/images/cars/inspect/truck2/inspect_p_006033.png");
                transform: translate(-13px, -18px);
                &:after {
                  left: 64px;
                  top: 116px;
                }
              }
            `}
          </style> */}

          <div className="pt-5 grid grid-cols-1 gap-5">
            {loading && (
              <div className="flex justify-center items-center py-20">
                <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {!loading && errorText !== "" && (
              <p className="text-white text-center py-10 text-lg">
                {errorText}
              </p>
            )}

            {!loading && errorText === "" && cars.length === 0 && (
              <p className="text-white text-center py-10 text-lg">
                Автомобили не найдены
              </p>
            )}

            {!loading &&
              errorText === "" &&
              cars.length > 0 &&
              cars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>

          {!loading && errorText === "" && totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-10 pb-30 flex-wrap">
              {filters.page > 1 && (
                <button
                  onClick={() => {
                    setFilters((prev) => ({ ...prev, page: prev.page - 1 }));
                    scrollToTop();
                  }}
                  className="px-3 py-2 rounded-[10px] bg-[#FFFFFF1A] text-white"
                >
                  ←
                </button>
              )}

              {pageNumbers[0] > 1 && (
                <>
                  <button
                    onClick={() => {
                      setFilters((prev) => ({ ...prev, page: 1 }));
                      scrollToTop();
                    }}
                    className="w-9 h-9 rounded-full bg-[#FFFFFF1A] text-white"
                  >
                    1
                  </button>
                  <span className="text-white/60 px-1">…</span>
                </>
              )}

              {pageNumbers.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setFilters((prev) => ({ ...prev, page: p }));
                    scrollToTop();
                  }}
                  className={`w-9 h-9 rounded-full ${
                    filters.page === p
                      ? "bg-[#DB1E1E] text-white"
                      : "bg-[#FFFFFF1A] text-white"
                  }`}
                >
                  {p}
                </button>
              ))}

              {pageNumbers[pageNumbers.length - 1] < totalPages && (
                <>
                  <span className="text-white/60 px-1">…</span>
                  <button
                    onClick={() => {
                      setFilters((prev) => ({ ...prev, page: totalPages }));
                      scrollToTop();
                    }}
                    className="w-9 h-9 rounded-full bg-[#FFFFFF1A] text-white"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              {filters.page < totalPages && (
                <button
                  onClick={() => {
                    setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
                    scrollToTop();
                  }}
                  className="px-3 py-2 rounded-[10px] bg-[#FFFFFF1A] text-white"
                >
                  →
                </button>
              )}
            </div>
          )}
        </section>
      </div>

      <section className="relative min-h-[700px]" ref={aboutCarRef}>
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={photoCatalog}
            alt="photo"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 pb-20 flex flex-col items-center">
          <div className="my-10">
            <MainTitleText>подбор авто экспертом</MainTitleText>
          </div>
          <FeedBlackForm />
        </div>
      </section>
    </main>
  );
}
