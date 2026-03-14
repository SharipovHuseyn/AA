import React from "react";
import MainTitleText from "../components/utilities/MainTitleText";
import porsche from "../assets/images/home/porsche.png";
import bmw from "../assets/images/home/bmw.svg";
import genesis from "../assets/images/home/genesis.svg";
import kia from "../assets/images/home/kia.svg";
import mercedes from "../assets/images/home/mercedes.svg";
import audi from "../assets/images/home/audi.svg";
import lexus from "../assets/images/home/lexus.svg";
import porscheS from "../assets/images/home/porsche.svg";
import hyundai from "../assets/images/home/hyundai.svg";
import "../assets/style/sliderAnimation.css";
import "../assets/style/fadeInAnimation.css";
import HomeButton from "../components/HomeButton";
import iconFrame from "../assets/images/home/frame.svg";
import HeaderEnvelope from "../components/utilities/HeaderEnvelope";
import n1 from "../assets/images/home/n1.svg";
import n2 from "../assets/images/home/n2.svg";
import n3 from "../assets/images/home/n3.svg";
import n4 from "../assets/images/home/n4.svg";
import n5 from "../assets/images/home/n5.svg";
import n6 from "../assets/images/home/n6.svg";
import m1 from "../assets/images/home/m1.svg";
import m2 from "../assets/images/home/m2.svg";
import EdgeFireEffect from "../components/utilities/EdgeFireEffect";
import Marquee from "react-fast-marquee";
import { useSmoothScroll } from "../components/useSmoothScroll";
import { AnimatedSection } from "../components/AnimatedSection";
import { CarHeadlights } from "../components/CarHeadlights";
import downRedImage from "../assets/images/home/downRed.png";
import downWhiteImage from "../assets/images/home/downWhite.png";

export default function Home() {
  const qualityRef = useSmoothScroll("#quality", 100);
  const leasingRef = useSmoothScroll("#leasing", 100);
  const downRef = useSmoothScroll("#down", 100);
  const individualizedApproachRef = useSmoothScroll(
    "#individualized-approach",
    100,
  );

  const scrollToQuality = () => {
    qualityRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLeasing = () => {
    leasingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDown = () => {
    downRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIndividualizedApproach = () => {
    individualizedApproachRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const icons = {
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
  };

  const leftColumnItems = [
    [
      "Честные сделки",
      "Мы работаем прозрачно и открыто, гарантируя вам уверенность на каждом этапе.",
      "n1",
    ],
    [
      "Безопасность",
      "Работаем строго по договору, обеспечивая прозрачность и юридическую защиту на каждом этапе сделки.",
      "n3",
    ],
    ["Доставка", "Надежная доставка прямо к вашему дому.", "n5"],
  ];

  const rightColumnItems = [
    [
      "Наше финансирование сделки",
      "Внесите 20% на этапе заключения договора, а остальное потом – при  получении ключей.",
      "n2",
    ],
    [
      "Обширный выбор автомобилей",
      "Обширный выбор марок и моделей из Южной Кореи и Китая.",
      "n4",
    ],
    [
      "Выгода для Юридических Лиц",
      "Возместите 20% НДС и уменьшите налог на прибыль до 25% за счет отнесения лизинговых платежей на себестоимость.",
      "n6",
    ],
  ];

  const brandLogos = [
    bmw,
    genesis,
    kia,
    mercedes,
    audi,
    lexus,
    porscheS,
    hyundai,
  ];

  const model = [
    "bmw",
    "genesis",
    "kia",
    "mercedes_benz",
    "audi",
    "lexus",
    "porsche",
    "hyundai",
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-white">
      <EdgeFireEffect />

      <section className="xl:px-40 md:px-20 px-0 md:pt-50 sm:pt-40 pt-10">
        <AnimatedSection animation="fade-in-up" immediate={true}>
          <HeaderEnvelope />
        </AnimatedSection>

        <div className="flex justify-center mt-10">
            <button 
              onClick={scrollToDown}
              className="
    text-white text-[10px] sm:text-[14px] md:text-[18px] font-bold 
     border-[1px] sm:border-[2px] border-[#DA201F]  py-2 px-3 sm:px-4 sm:py-2 rounded-[10px] 
    flex items-center
    transition-all duration-300
    hover:text-[#DA201F]
    hover:bg-white
    group
  "
            >
              <img
                className="w-4 w-4 lg:w-6 lg:h-6 mr-2 transition-all duration-300 group-hover:hidden"
                src={downWhiteImage}
                alt="downWhiteImage"
              />
              <img
                className="w-4 w-4 lg:w-6 lg:h-6  mr-2 transition-all duration-300 hidden group-hover:block"
                src={downRedImage}
                alt="downRedImage"
              />
              Листать вниз
              <img
                className="w-4 w-4 lg:w-6 lg:h-6 ml-2 transition-all duration-300 group-hover:hidden"
                src={downWhiteImage}
                alt="downWhiteImage"
              />
              <img
                className="w-4 w-4 lg:w-6 lg:h-6 ml-2 transition-all duration-300 hidden group-hover:block"
                src={downRedImage}
                alt="downRedImage"
              />
            </button>
        </div>
      </section>

      <section className="xl:pt-50 md:pt-40 pt-10  xl:pb-30 md:pb-20 pb-5  xl:px-20 md:px-10 px-0 flex justify-center">
        <div className="scene">
          <CarHeadlights src={porsche} alt="porsche" />
        </div>
      </section>

      <EdgeFireEffect />

      <section ref={qualityRef}>
        <AnimatedSection animation="fade-in-up">
          <MainTitleText>
            гарантируем <span className="text-[#FF0000]">качество</span> <br />{" "}
            и <span className="text-[#FF0000]">безопасность</span> сделки
          </MainTitleText>

          <p className="text-center font-[100] text-[12px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] sm:text-[16px]  uppercase px-10 py-10 sm:py-15 sm:px-20">
            Каждая сделка проходит с максимальной надёжностью и прозрачностью.{" "}
            Безопасность расчётов обеспечивает компания{" "}
            <a href="https://it-alliance-company.ru" target="_blank">
              <span className="text-[#FF0000]">ИТ Альянс</span>
            </a>{" "}
            с уставным капиталом{" "}
            <a
              href="https://checko.ru/company/it-alyans-1237700701886?ysclid=mk76p2e0fl691339823"
              target="_blank"
            >
              <span className="text-[#FF0000]">0,5 млрд рублей</span>
            </a>{" "}
            и подтверждённой финансовой устойчивостью.
          </p>
          <div className="flex justify-center">
            <HomeButton icon={iconFrame} url="/about">
              подробнее
            </HomeButton>
          </div>
        </AnimatedSection>
      </section>

      <section className="relative mt-20 bg-[#FFFFFF09] py-5 lg:py-8 overflow-hidden">
        <Marquee speed={50} gradient={false} pauseOnHover={false}>
          {brandLogos.map((logo, index) => (
            <a href={`/catalog#${model[index]}`}>
              <div
                key={`brand-${index}`}
                className="bg-[#ffffff08] lg:h-20 h-15 py-3 lg:px-14 px-8 rounded-[10px] flex items-center justify-center mx-4 lg:mx-6"
              >
                <img
                  src={logo}
                  alt={`brand-${index}`}
                  className="w-10 md:w-12 lg:w-13 2xl:w-15 h-full object-contain transition-all duration-300 hover:scale-110"
                />{" "}
              </div>
            </a>
          ))}
          {brandLogos.map((logo, index) => (
            <a href={`/catalog#${model[index]}`}>
              <div
                key={`brand-dup-${index}`}
                className="bg-[#ffffff08] lg:h-20 h-15 py-3 lg:px-14 px-8 rounded-[10px] flex items-center justify-center mx-4 lg:mx-6"
              >
                <img
                  src={logo}
                  alt={`brand-${index}`}
                  className="w-10 md:w-12 lg:w-13 2xl:w-15 h-full object-contain transition-all duration-300 hover:scale-110"
                />{" "}
              </div>
            </a>
          ))}
        </Marquee>
      </section>

      <section className="pt-10 pb-15 md:pt-20 md:pb-30">
        <AnimatedSection animation="fade-in-up">
          <div className="flex justify-center">
            <h1 className="text-white uppercase 2xl:text-[28px] lg:text-[22px] sm:text-[16px] text-[12px]">
              <span className="text-[#FFFFFF80]">
                <span className="italic underline font-[100]">
                  сроки доставки
                </span>{" "}
                авто{" "}
              </span>
              от 30 до 50 дней
            </h1>
          </div>
        </AnimatedSection>
      </section>

      <EdgeFireEffect />

      <section className="mx-auto px-4 md:py-20 sm:py-15 py-10" ref={downRef}>
        <AnimatedSection animation="fade-in-up">
          <MainTitleText>
            ВАШЕ <span className="text-[#FF0000]">СПОКОЙСТВИЕ</span> - <br />{" "}
            НАША ЗАБОТА
          </MainTitleText>
        </AnimatedSection>

        <div className="mt-25 grid md:grid-cols-2 grid-cols-1 gap-5 text-[#9AA0A6]">
          <div className="space-y-5">
            {leftColumnItems.map((item, index) => (
              <AnimatedSection
                key={`left-${index}`}
                animation="fade-in-left"
                delay={index + 1}
              >
                <div className="flex items-center bg-[#FFFFFF09] p-4 rounded-[15px] h-40">
                  <img className="mr-4" src={icons[item[2]]} alt={item[2]} />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {item[0]}
                    </h3>
                    <p className="text-white font-light text-base leading-relaxed">
                      {item[1]}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="space-y-5">
            {rightColumnItems.map((item, index) => (
              <AnimatedSection
                key={`right-${index}`}
                animation="fade-in-right"
                delay={index + 1}
              >
                <div className="flex items-center bg-[#FFFFFF09] p-4 rounded-[15px] h-40">
                  <img className="mr-4" src={icons[item[2]]} alt={item[2]} />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {item[0]}
                    </h3>
                    <p className="text-white font-light text-base leading-relaxed">
                      {item[1]}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <HomeButton url="/contacts/#feedback-form">
            Оставьте заявку
          </HomeButton>
        </div>
      </section>

      <EdgeFireEffect />

      <section
        ref={leasingRef}
        className="max-w-7xl mx-auto px-4 md:py-50 py-25 text-center"
      >
        <AnimatedSection animation="fade-in-up">
          <MainTitleText>
            Ответственность <br /> за ваш
            <span className="text-[#FF0000]"> комфорт</span>
          </MainTitleText>

          <div className="lg:px-20 md:px-10 py-15">
            <p className="bg-[#FFFFFF09] text-center font-[100] text-[12px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] sm:text-[16px] uppercase border-[#FF0000] border-[1px] md:px-15 sm:px-10 px-5 py-4 rounded-[15px]">
              Чтобы покупка автомобиля была полностью безопасной и комфортной,
              мы сопровождаем вас не только на этапе выбора, но и после —
              включая оформление{" "}
              <span className="text-[#FF0000]">страхования</span> и{" "}
              <span className="text-[#FF0000]">лизинга</span>. Наши партнёры
              помогают получить лучшие условия по ставкам и минимизировать ваши
              расходы.
            </p>
          </div>

          <div className="md:mt-6 mt-2 flex justify-center gap-10">
            <HomeButton icon={iconFrame} url="/insurance">
              Страхование
            </HomeButton>
          </div>
        </AnimatedSection>
      </section>

      <EdgeFireEffect />

      <section
        className="mx-auto md:py-20 py-10"
        ref={individualizedApproachRef}
      >
        <div className="px-2">
          <AnimatedSection animation="fade-in-up">
            <MainTitleText>
              <span className="text-[#FF0000]">ИНДИВИДУАЛЬНЫЙ </span>
              ПОДХОД <br /> И
              <span className="text-[#FF0000]"> безупречная</span> репутация
            </MainTitleText>
          </AnimatedSection>
        </div>

        <div className="mt-20 2xl:px-40 lg:px-20 md:grid-cols-2 px-10 grid grid-cols-1  justify-between gap-5">
          <AnimatedSection animation="fade-in-left" delay={1}>
            <div className="bg-[#FFFFFF10] p-5 text-white rounded-[15px]">
              <img
                src={m1}
                className="md:w-14 w-12"
                alt="Удобная покупка автомобиля"
              />
              <p className="uppercase xl:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] mt-5">
                Автомобиль вашей мечты <br /> без визита в салон.
                <br /> Купите автомобиль не выходя из дома
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right" delay={2}>
            <div className="bg-[#FFFFFF10] p-5 text-white rounded-[15px]">
              <img
                src={m2}
                className="md:w-14 w-12"
                alt="Статистика доставки"
              />
              <p className="uppercase xl:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] mt-5">
                привезли <br /> более 2500 автомобилей <br /> с 2022 года
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-10 2xl:px-60 md:px-40 min-[1440px]:px-30 md:py-40 py-20">
        <AnimatedSection animation="fade-in-up">
          <div className="border-2 border-[#E10600] bg-[#FFFFFF09] rounded-[15px] p-5 sm:p-8 lg:p-10 2xl:p-12 text-center">
            <MainTitleText>Авто в Корее</MainTitleText>

            <p className="py-10 text-center font-[400] text-[12px] sm:text-[18px] lg:text-[22px] px-5 sm:px-10 md:px-12 lg:px-20">
              Машины, которые доступны к заказу <br /> с ценами{" "}
              <span className="text-[#DB1E1E]">под ключ</span> до Владивостока
            </p>

            <div className="flex justify-center">
              <HomeButton icon={iconFrame} url="/about">
                подробнее
              </HomeButton>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
