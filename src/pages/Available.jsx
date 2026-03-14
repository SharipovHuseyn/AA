import MainTitleText from "../components/utilities/MainTitleText";
import photo from "../assets/images/available/photo.png";
import EdgeFireEffect from "../components/utilities/EdgeFireEffect";
import infoIcon from "../assets/images/available/info.svg";
import settingsSliders from "../assets/images/catalog/settingsSliders.svg";
import infoWhiteIcon from "../assets/images/available/info_white.svg";

import { useState, useEffect, useRef } from "react";

export default function Available() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="lg:pt-60 md:pt-40 pt-25 bg-[#030305]">
      <MainTitleText>
        Автомобили <span className="text-brand-normal">в наличии</span>
      </MainTitleText>
      <EdgeFireEffect />

      <div className="flex md:px-10 px-4 mb-10 pt-15 lg:pt-25 items-start">
        <div
          className={`fixed inset-0 bg-black/50 lg:z-110 lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <section
          ref={menuRef}
          className={`fixed top-0 left-0 h-full z-111 lg:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
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

            <div className="pb-6">
              <h4 className="text-white font-[400]">Марка</h4>
              <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
                <select
                  name="mark"
                  id="mark"
                  className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
                  defaultValue="all"
                >
                  <option value="all" disabled>
                    Все
                  </option>
                  <option value="bmw">BMW</option>
                  <option value="kia">KIA</option>
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
                />
                <input
                  className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
                  type="number"
                  min="0"
                  placeholder="до"
                />
              </div>
              <div className="flex mt-4">
                <label className="flex items-start text-white py-2">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    required
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
                    Самые выгодные авто{" "}
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
                  min={0}
                  placeholder="от"
                />
                <input
                  className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
                  type="number"
                  min={0}
                  placeholder="до"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="bg-[#FFFFFF0D] uppercase text-[18px] border-white rounded-[10px] py-3 px-4 text-[#FBFFFE] font-[600] hover:text-[#1E1E1E] hover:bg-white transition-all duration-500 ease-in-out">
                сбросить фильтр
              </button>
            </div>
          </div>
        </section>

        <section className="hidden lg:block min-w-[370px] pr-10">
          <div className="px-5 py-6 bg-[#FFFFFF09] rounded-[30px] w-[370px] h-full overflow-y-auto">
            <div className="pb-6">
              <h4 className="text-white font-[400]">Марка</h4>
              <div className="mt-2 px-4 rounded-[10px] border-[2px] border-[#FFFFFF0D] relative">
                <select
                  name="mark"
                  id="mark"
                  className="w-full py-3 text-white outline-none appearance-none bg-transparent text-sm"
                defaultValue="all"
                >
                  <option value="all" disabled>
                    Все
                  </option>
                  <option value="bmw">BMW</option>
                  <option value="kia">KIA</option>
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
                  min={0}
                  placeholder="от"
                />
                <input
                  className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
                  type="number"
                  min={0}
                  placeholder="до"
                />
              </div>
              <div className="flex mt-4">
                <label className="flex items-start text-white py-2">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                    required
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
                    Самые выгодные авто{" "}
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
                  min={0}
                  placeholder="от"
                />
                <input
                  className="bg-[#FFFFFF09] border-[2px] border-[#FFFFFF0D] text-white p-2 rounded-[10px] outline-0 w-35"
                  type="number"
                  min={0}
                  placeholder="до"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="bg-[#FFFFFF0D] uppercase text-[18px] border-white rounded-[10px] py-3 px-4 text-[#FBFFFE] font-[600] hover:text-[#1E1E1E] hover:bg-white transition-all duration-500 ease-in-out">
                сбросить фильтр
              </button>
            </div>
          </div>
        </section>

        <section className="w-full md:pl-10">
          <div className="flex align-middle items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded-[10px] lg:hidden z-10 bg-[#DB1E1E] hover:bg-[#C11A1A] p-2 w-10 h-10 flex items-center justify-center transition-colors"
              >
                <img src={settingsSliders} alt="settingsSliders" />
              </button>

              <h4 className="text-white md:block hidden font-[500] text-[16px]">
                Число автомобилей
              </h4>
            </div>
            <div className="flex align-middle items-center">
              <p className="text-[#9E9E9E] pr-5 md:block hidden">сортировка:</p>
              <div className="mt-2 px-3 rounded-[10px] border-[2px] border-[#DB1E1E] relative">
                <select className="text-white py-2 outline-0 w-[230px] appearance-none bg-transparent">
                  <option value="new">по году выпуска - новее</option>
                  <option value="old">по году выпуска - старее</option>
                  <option value="price-low">по цене - дешевле</option>
                  <option value="price-high">по цене - дороже</option>
                  <option value="mileage-low">по пробегу - меньше</option>
                  <option value="mileage-high">по пробегу - больше</option>
                  <option value="popular">по популярности</option>
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

          <div className="pt-10 grid grid-cols-1 gap-5">
            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-start mt-4">
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Комплектация businessjet
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Эксклюзивный интерьер
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Межсалонная перегородка
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-between items-center w-full mt-6">
                    <h4 className="text-white font-[600] md:text-[28px] text-[22px]">
                      3 535 763 ₽
                    </h4>
                    <div className="flex gap-2 flex-wrap relative">
                      <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#1EDB790D] text-[#1EDB79] flex items-center gap-2 rounded-[10px]">
                        <img
                          className="w-[15px] h-[15px]"
                          src={infoIcon}
                          alt="infoIcon"
                        />
                        Проходной
                      </button>
                      <div className="group">
                        <div className="bg-[#3b414e] absolute bottom-14 right-0 left-0 rounded-[15px] p-3 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                          <p className="">
                            Цена на такой автомобиль может быть выше на 20-50%
                            от цены, заявленной на Encar. Запросить расчёт
                            актуальной стоимости вы можете со страницы
                            автомобиля
                          </p>
                        </div>
                        <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#3b414e] text-white flex items-center gap-2 rounded-[10px]">
                          <img
                            className="w-[15px] h-[15px]"
                            src={infoWhiteIcon}
                            alt="infoIcon"
                          />
                          Лизинговый
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-start mt-4">
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Комплектация businessjet
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Эксклюзивный интерьер
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Межсалонная перегородка
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-between items-center w-full mt-6">
                    <h4 className="text-white font-[600] md:text-[28px] text-[22px]">
                      3 535 763 ₽
                    </h4>
                    <div className="flex gap-2 flex-wrap relative">
                      <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#1EDB790D] text-[#1EDB79] flex items-center gap-2 rounded-[10px]">
                        <img
                          className="w-[15px] h-[15px]"
                          src={infoIcon}
                          alt="infoIcon"
                        />
                        Проходной
                      </button>
                      <div className="group">
                        <div className="bg-[#3b414e] absolute bottom-14 right-0 left-0 rounded-[15px] p-3 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                          <p className="">
                            Цена на такой автомобиль может быть выше на 20-50%
                            от цены, заявленной на Encar. Запросить расчёт
                            актуальной стоимости вы можете со страницы
                            автомобиля
                          </p>
                        </div>
                        <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#3b414e] text-white flex items-center gap-2 rounded-[10px]">
                          <img
                            className="w-[15px] h-[15px]"
                            src={infoWhiteIcon}
                            alt="infoIcon"
                          />
                          Лизинговый
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-start mt-4">
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Комплектация businessjet
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Эксклюзивный интерьер
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Межсалонная перегородка
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-between items-center w-full mt-6">
                    <h4 className="text-white font-[600] md:text-[28px] text-[22px]">
                      3 535 763 ₽
                    </h4>
                    <div className="flex gap-2 flex-wrap relative">
                      <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#1EDB790D] text-[#1EDB79] flex items-center gap-2 rounded-[10px]">
                        <img
                          className="w-[15px] h-[15px]"
                          src={infoIcon}
                          alt="infoIcon"
                        />
                        Проходной
                      </button>
                      <div className="group">
                        <div className="bg-[#3b414e] absolute bottom-14 right-0 left-0 rounded-[15px] p-3 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                          <p className="">
                            Цена на такой автомобиль может быть выше на 20-50%
                            от цены, заявленной на Encar. Запросить расчёт
                            актуальной стоимости вы можете со страницы
                            автомобиля
                          </p>
                        </div>
                        <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#3b414e] text-white flex items-center gap-2 rounded-[10px]">
                          <img
                            className="w-[15px] h-[15px]"
                            src={infoWhiteIcon}
                            alt="infoIcon"
                          />
                          Лизинговый
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-start mt-4">
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Комплектация businessjet
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Эксклюзивный интерьер
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Межсалонная перегородка
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-between items-center w-full mt-6">
                    <h4 className="text-white font-[600] md:text-[28px] text-[22px]">
                      3 535 763 ₽
                    </h4>
                    <div className="flex gap-2 flex-wrap relative">
                      <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#1EDB790D] text-[#1EDB79] flex items-center gap-2 rounded-[10px]">
                        <img
                          className="w-[15px] h-[15px]"
                          src={infoIcon}
                          alt="infoIcon"
                        />
                        Проходной
                      </button>
                      <div className="group">
                        <div className="bg-[#3b414e] absolute bottom-14 right-0 left-0 rounded-[15px] p-3 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                          <p className="">
                            Цена на такой автомобиль может быть выше на 20-50%
                            от цены, заявленной на Encar. Запросить расчёт
                            актуальной стоимости вы можете со страницы
                            автомобиля
                          </p>
                        </div>
                        <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#3b414e] text-white flex items-center gap-2 rounded-[10px]">
                          <img
                            className="w-[15px] h-[15px]"
                            src={infoWhiteIcon}
                            alt="infoIcon"
                          />
                          Лизинговый
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-start mt-4">
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Комплектация businessjet
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Эксклюзивный интерьер
                    </span>
                    <span className="font-[400] text-[14px] md:text-[16px] p-2 md:p-3 rounded-[10px] bg-[#FFFFFF0D] text-white">
                      Межсалонная перегородка
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/car">
              <div className="rounded-[20px] bg-[#FFFFFF0D] grid grid-cols-1 md:grid-cols-[auto_1fr] justify-start items-start">
                <div className="p-4 md:p-5 w-full flex justify-start">
                  <img
                    className="rounded-[15px] max-lg:w-full object-cover"
                    src={photo}
                    alt="photo"
                  />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-start items-start w-full">
                  <h4 className="text-white font-[500] md:text-[22px] text-left mb-4">
                    Mercedes-Benz V-Класс Extra Long 300 d экстра длинный III
                    (W447)
                  </h4>

                  <div className="text-white font-[400] text-[16px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      <p>Комплектация Exclusive</p>
                      <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
                      <p>Чёрный</p>
                    </div>

                    <div className="flex items-start gap-8 mb-4 justify-start flex-wrap">
                      <p className="text-[14px] md:text-[16px] text-left">
                        2.0 л. 237 л.с., дизель <br />
                        Полный привод
                      </p>
                      <p className="text-[14px] md:text-[16px] text-left">
                        Минивэн <br /> Автомат
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-between items-center w-full mt-6">
                    <h4 className="text-white font-[600] md:text-[28px] text-[22px]">
                      3 535 763 ₽
                    </h4>
                    <div className="flex gap-2 flex-wrap relative">
                      <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#1EDB790D] text-[#1EDB79] flex items-center gap-2 rounded-[10px]">
                        <img
                          className="w-[15px] h-[15px]"
                          src={infoIcon}
                          alt="infoIcon"
                        />
                        Проходной
                      </button>
                      <div className="group">
                        <div className="bg-[#3b414e] absolute bottom-14 right-0 left-0 rounded-[15px] p-3 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                          <p className="">
                            Цена на такой автомобиль может быть выше на 20-50%
                            от цены, заявленной на Encar. Запросить расчёт
                            актуальной стоимости вы можете со страницы
                            автомобиля
                          </p>
                        </div>
                        <button className="text-[16px] font-[400] p-2 xl:p-3 bg-[#3b414e] text-white flex items-center gap-2 rounded-[10px]">
                          <img
                            className="w-[15px] h-[15px]"
                            src={infoWhiteIcon}
                            alt="infoIcon"
                          />
                          Лизинговый
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="flex align-middle justify-center gap-4 pt-10 pb-30">
            <div className="text-[#ffffff75] text-[26px] flex justify-center w-[35px] h-[35px] items-center cursor-pointer">
              {"≺"}
            </div>
            <div className="cursor-pointer text-white bg-[#DB1E1E] rounded-[50%] text-[16px] flex justify-center w-[35px] h-[35px] items-center">
              1
            </div>
            <div className="cursor-pointer text-white rounded-[50%] text-[16px] flex justify-center w-[35px] h-[35px] items-center">
              2
            </div>
            <div className="cursor-pointer text-white rounded-[50%] text-[16px] flex justify-center w-[35px] h-[35px] items-center">
              ...
            </div>
            <div className="cursor-pointer text-white bg-[#F5F5F51A] rounded-[50%] text-[16px] flex justify-center w-[35px] h-[35px] items-center">
              5
            </div>

            <div className="cursor-pointer text-[#DB1E1E] rounded-[50%] text-[26px] flex justify-center w-[35px] h-[35px] items-center">
              {"≻"}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
