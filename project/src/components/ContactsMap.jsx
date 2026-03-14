import React, { useState } from "react";
import LocIcon from "../assets/images/contacts/icons/loc.svg";
import TimeIcon from "../assets/images/contacts/icons/time.svg";
import TelIcon from "../assets/images/contacts/icons/tel.svg";
import { useSmoothScroll } from "../components/useSmoothScroll";

export default function ContactsMap() {
  const mapRef = useSmoothScroll("#maps", 100);
  const [show, SetShow] = useState(0);
  const [activeMap, setActiveMap] = useState("moscow");

  const handleAddressClick = (mapType) => {
    setActiveMap(mapType);
  };

  let block = "";

  if (show == 0) {
    block = (
      <section
        ref={mapRef}
        className="mx-auto w-full mt-8 sm:mt-10 relative z-50"
      >
        <div className="hidden lg:block">
          <div className="w-[90%] p-5 flex justify-between mx-auto h-[480px] rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white/[0.05]">
            <div className="flex flex-col md:w-[500px] lg:w-[550px] xl:w-[600px] 2xl:w-[630px] flex-shrink-0 mr-4">
              <div className="pb-4 border-b-1 border-[#D9D9D9]/10">
                <div className="flex font-semibold justify-between align-baseline text-white text-xl w-[300px]">
                  <p
                    className="text-[#DB1E1E] px-5 py-4 rounded-2xl  cursor-pointer bg-[#3f1a1a8c]"
                    onClick={() => SetShow(0)}
                  >
                    Главные
                  </p>
                  <p
                    className="text-[#FBFFFE] px-5 py-4 rounded-2xl cursor-pointer"
                    onClick={() => SetShow(1)}
                  >
                    Партнерские
                  </p>
                </div>
              </div>

              <div className="flex flex-col mt-4 text-white">
                <div className="w-full py-5 px-4 bg-white/[0.03] w-[420px] rounded-xl">
                  <p className="text-[18px] lg:text-[22px]">Главный офис</p>
                  <div className="flex items-center mt-3">
                    <img src={LocIcon} alt="" />
                    <p className="ml-3 hover:text-[#fe0100] cursor-pointer transition-all duration-300">
                      г. Москва, Ленинский проспект, 15А, 119071, Central Park
                      Tower
                    </p>
                  </div>

                  <div className="flex items-center mt-3">
                    <img src={TimeIcon} alt="" />
                    <p className="ml-3">9:00 - 19:00</p>
                  </div>

                  <div className="flex items-center mt-3">
                    <img src={TelIcon} alt="" />
                    <p className="ml-3">+7 (915) 124-95-45</p>
                  </div>
                </div>
              </div>
            </div>

            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad18381949b62d072f8c3f96431b1af6980421d717f5f76301d450c11ef9bbe93&amp;source=constructor&theme=dark"
              style={{ position: "relative", zIndex: 50 }}
              title="Карта расположения офиса"
              className="rounded-2xl sm:rounded-3xl lg:rounded-4xl  w-[100%] filter grayscale "
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="w-[90%] p-5 flex flex-col mx-auto rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white/[0.05]">
            <div className="flex flex-col w-[100%] flex-shrink-0 mr-4">
              <div className="pb-3 sm:pb-4 border-b-1 border-[#D9D9D9]/10">
                <div className="flex font-semibold justify-between align-baseline text-white text-xl w-[300px]">
                  <p
                    className="text-[#DB1E1E] px-5 py-4 rounded-2xl cursor-pointer bg-[#3f1a1a8c]"
                    onClick={() => SetShow(0)}
                  >
                    Главные
                  </p>
                  <p
                    className="text-[#FBFFFE] px-5 py-4 rounded-2xl cursor-pointer"
                    onClick={() => SetShow(1)}
                  >
                    Партнерские
                  </p>
                </div>
              </div>

              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad18381949b62d072f8c3f96431b1af6980421d717f5f76301d450c11ef9bbe93&amp;source=constructor&theme=dark"
                style={{ position: "relative", zIndex: 50 }}
                title="Карта расположения офиса"
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl mt-4 h-[150px] xs:h-[180px] sm:h-[250px] md:h-[330px] w-[100%] filter grayscale"
                frameBorder="0"
              ></iframe>

              <div className="flex flex-col mt-4 text-white">
                <div className="w-full py-5 px-4 bg-white/[0.03] w-[420px] rounded-xl">
                  <p className="text-[18px] lg:text-[22px]">Главный офис</p>
                  <div className="flex items-center mt-3">
                    <img src={LocIcon} alt="" />
                    <p
                      className="ml-3 hover:text-[#fe0100] cursor-pointer transition-all duration-300"
                      onClick={() => handleAddressClick("moscow")}
                    >
                      г. Москва, Ленинский проспект, 15А, 119071, Central Park
                      Tower
                    </p>
                  </div>

                  <div className="flex items-center mt-3">
                    <img src={TimeIcon} alt="" />
                    <p className="ml-3">9:00 - 19:00</p>
                  </div>

                  <div className="flex items-center mt-3">
                    <img src={TelIcon} alt="" />
                    <p className="ml-3">8-800-101-10-47</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    block = (
      <section
        ref={mapRef}
        className="mx-auto w-full mt-8 sm:mt-10 relative z-50"
      >
        <div className="hidden lg:block">
          <div className="w-[90%] p-5 flex justify-between mx-auto h-[480px] rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white/[0.05]">
            <div className="flex flex-col md:w-[500px] lg:w-[550px] xl:w-[600px] 2xl:w-[630px] flex-shrink-0 mr-4">
              <div className="pb-4 border-b-1 border-[#D9D9D9]/10">
                <div className="flex font-semibold justify-between align-baseline text-white text-xl w-[300px]">
                  <p
                    className="text-[#FBFFFE] px-5 py-4 rounded-2xl  cursor-pointer"
                    onClick={() => SetShow(0)}
                  >
                    Главные
                  </p>
                  <p
                    className="text-[#DB1E1E] px-5 py-4 rounded-2xl bg-[#3f1a1a8c] cursor-pointer"
                    onClick={() => SetShow(1)}
                  >
                    Партнерские
                  </p>
                </div>
              </div>

              <div className="flex flex-col mt-4 text-white">
                <div className="w-full py-5 px-4 bg-white/[0.03] w-[420px] rounded-xl">
                  <p className="text-[18px] lg:text-[22px]">Партнерский офис</p>
                  <div className="flex items-center mt-3">
                    <img src={LocIcon} alt="" />
                    <p
                      className={`ml-3 hover:text-[#fe0100] cursor-pointer transition-all duration-300 ${
                        activeMap === "moscow" ? "text-[#fe0100]" : ""
                      }`}
                      onClick={() => handleAddressClick("moscow")}
                    >
                      ул. Архитектора Щусева 5к2
                    </p>
                  </div>

                  <div className="flex items-center mt-3">
                    <img src={TimeIcon} alt="" />
                    <p className="ml-3">9:00 - 19:00</p>
                  </div>
                </div>

                <div className="w-full mt-4 py-5 px-4 bg-white/[0.03] w-[420px] rounded-xl">
                  <p className="text-[18px] lg:text-[22px]">
                    Филиал в г. Сеул (Корея)
                  </p>
                  <div className="flex items-center mt-3">
                    <img src={LocIcon} alt="" />
                    <p
                      className={`ml-3 hover:text-[#fe0100] cursor-pointer transition-all duration-300 ${
                        activeMap === "seoul" ? "text-[#fe0100]" : ""
                      }`}
                      onClick={() => handleAddressClick("seoul")}
                    >
                      D 17, 26th floor, 165, Convensia-daero, Yeonsu-gu, Incheon
                      (Songdo-dong, Posco Tower-Songdo)
                    </p>
                  </div>

                  <div className="flex items-center mt-3">
                    <img src={TimeIcon} alt="" />
                    <p className="ml-3">9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            {activeMap === "moscow" && (
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a9200d6dee61ac51843e04ebac9e575be47071327b8998937e95bc6ab45e9f4&amp;source=constructor&theme=dark"
                style={{ position: "relative", zIndex: 50 }}
                title="Карта расположения офиса в Москве"
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl w-[100%] filter grayscale"
                frameBorder="0"
              ></iframe>
            )}

            {activeMap === "seoul" && (
              <iframe
                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=126.645486%2C37.394647&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTUzMjAyOTcwEjnrjIDtlZzrr7zqta0sIGt2YXJ0YWwgU29uZ2RvIENpdHksIFNvbmdkby1kb25nLCBZZW9uc3UgR3UiCg2qSf1CFW-RFUI%2C&source=mapframe&um=constructor%3Ad18381949b62d072f8c3f96431b1af6980421d717f5f76301d450c11ef9bbe93&utm_source=share&z=14.93&amp;source=constructor&theme=dark"
                style={{ position: "relative", zIndex: 50 }}
                title="Карта расположения офиса в Сеуле"
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl w-[100%] filter grayscale"
                frameBorder="0"
              ></iframe>
            )}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="w-[90%] p-5 flex flex-col mx-auto rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white/[0.05]">
            <div className="flex flex-col w-[100%] flex-shrink-0 mr-4">
              <div className="pb-3 sm:pb-4 border-b-1 border-[#D9D9D9]/10">
                <div className="flex font-semibold justify-between align-baseline text-white text-xl w-[300px]">
                  <p
                    className="text-[#FBFFFE] px-5 py-4 rounded-2xl  cursor-pointer"
                    onClick={() => SetShow(0)}
                  >
                    Главные
                  </p>
                  <p
                    className="text-[#DB1E1E] px-5 py-4 rounded-2xl bg-[#3f1a1a8c] cursor-pointer"
                    onClick={() => SetShow(1)}
                  >
                    Партнерские
                  </p>
                </div>
              </div>

              {activeMap === "moscow" && (
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a9200d6dee61ac51843e04ebac9e575be47071327b8998937e95bc6ab45e9f4&amp;source=constructor&theme=dark"
                  style={{ position: "relative", zIndex: 50 }}
                  title="Карта расположения офиса в Москве"
                  className="rounded-2xl sm:rounded-3xl lg:rounded-4xl mt-4 h-[150px] xs:h-[180px] sm:h-[250px] md:h-[330px] w-[100%] filter grayscale"
                  frameBorder="0"
                ></iframe>
              )}

              {activeMap === "seoul" && (
                <iframe
                  src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=126.645486%2C37.394647&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTUzMjAyOTcwEjnrjIDtlZzrr7zqta0sIGt2YXJ0YWwgU29uZ2RvIENpdHksIFNvbmdkby1kb25nLCBZZW9uc3UgR3UiCg2qSf1CFW-RFUI%2C&source=mapframe&um=constructor%3Ad18381949b62d072f8c3f96431b1af6980421d717f5f76301d450c11ef9bbe93&utm_source=share&z=14.93&amp;source=constructor&theme=dark"
                  style={{ position: "relative", zIndex: 50 }}
                  title="Карта расположения офиса в Сеуле"
                  className="rounded-2xl sm:rounded-3xl lg:rounded-4xl mt-4 h-[150px] xs:h-[180px] sm:h-[250px] md:h-[330px] w-[100%] filter grayscale"
                  frameBorder="0"
                ></iframe>
              )}
              <div className="flex flex-col mt-4 text-white">
                <div className="w-full py-5 px-4 bg-white/[0.03] w-[420px] rounded-xl">
                  <p className="text-[18px] lg:text-[22px]">Партнерский офис</p>
                  <div className="flex items-center mt-3">
                    <img src={LocIcon} alt="" />
                    <p
                      className={`ml-3 hover:text-[#fe0100] cursor-pointer transition-all duration-300 ${
                        activeMap === "moscow" ? "text-[#fe0100]" : ""
                      }`}
                      onClick={() => handleAddressClick("moscow")}
                    >
                      ул. Архитектора Щусева 5к2
                    </p>
                  </div>

                  <div className="flex items-center mt-3">
                    <img src={TimeIcon} alt="" />
                    <p className="ml-3">9:00 - 20:00</p>
                  </div>
                </div>

                <div className="w-full mt-4 py-5 px-4 bg-white/[0.03] w-[420px] rounded-xl">
                  <p className="text-[18px] lg:text-[22px]">
                    Филиал в г. Сеул (Корея)
                  </p>
                  <div className="flex items-center mt-3">
                    <img src={LocIcon} alt="" />
                    <p
                      className={`ml-3 hover:text-[#fe0100] cursor-pointer transition-all duration-300 ${
                        activeMap === "seoul" ? "text-[#fe0100]" : ""
                      }`}
                      onClick={() => handleAddressClick("seoul")}
                    >
                      D 17, 26th floor, 165, Convensia-daero, Yeonsu-gu, Incheon
                      (Songdo-dong, Posco Tower-Songdo)
                    </p>
                  </div>

                  <div className="flex items-center mt-3">
                    <img src={TimeIcon} alt="" />
                    <p className="ml-3">9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return block;
}
