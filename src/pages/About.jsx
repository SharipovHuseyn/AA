import MainTitleText from "../components/utilities/MainTitleText";
import EdgeFireEffect from "../components/utilities/EdgeFireEffect";
import GroupLogo from "../assets/images/about/GroupLogo.svg";
import flags from "../assets/images/about/flags.svg";
import p1 from "../assets/images/about/p1.svg";
import p2 from "../assets/images/about/p2.svg";
import p3 from "../assets/images/about/p3.svg";
import p4 from "../assets/images/about/p4.svg";
import v1 from "../assets/images/about/v1.svg";
import v2 from "../assets/images/about/v2.svg";
import v3 from "../assets/images/about/v3.svg";
import v4 from "../assets/images/about/v4.svg";
import backstage from "../assets/images/about/backstage.png";
import HomeButton from "../components/HomeButton";
import iconFrame from "../assets/images/home/frame.svg";
import play from "../assets/images/about/play.svg";
import reviewImage from "../assets/images/about/review.png";
import { useState, useEffect, useRef } from "react";
import { useSmoothScroll } from "../components/useSmoothScroll";
import ButtonWhite from "../components/ButtonWhite/ButtonWhite";
import VideoSlider from "../components/VideoSlider"

import video1 from "../video/reviews/reviews1.webm";
import video2 from "../video/reviews/reviews2.webm";
import video3 from "../video/reviews/reviews3.webm";
import video4 from "../video/reviews/reviews4.webm";
import video5 from "../video/reviews/reviews5.webm";
import video6 from "../video/reviews/reviews6.webm";
import video7 from "../video/reviews/reviews7.webm";

export default function About() {
  const achievementsRef = useSmoothScroll("#achievements", 100);
  const servicesRef = useSmoothScroll("#services", 100);
  const reviewsRef = useSmoothScroll("#reviews", 100);
  const behindRef = useSmoothScroll("#behind", 100);

  const scrollToFeedback = () => {
    achievementsRef.current?.scrollIntoView({ behavior: "smooth" });
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
    behindRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  let cardLogos = [
    { logo: p1, title: "> 2500", text: "Автомобилей доставлено" },
    { logo: p2, title: "От 30 до 60 дней", text: "От покупки до получения" },
    { logo: p3, title: "До 30%", text: "Дешевле, чем на рынке РФ" },
    { logo: p4, title: "92%", text: "Клиентов приходят по рекомендации" },
  ];

  let cardAdvantages1 = [
    "Страхование груза",
    "Прямые платежи из РФ",
    "Прозрачное ценообразование",
    "Гарантия юридической чистоты сделки",
    "Офис в Корее, поставка без посредников",
    "Профессиональное оборудование для проверки автомобиля",
    "Фото/видео отчёт проверки авто / компьютерная диагностика",
  ];

  let cardAdvantages2 = [
    "Ввоз и таможенное оформление в соответствии с законами РФ",
    "Осмотр автомобиля происходит штатными экспертами в Корее",
    "Гарантом сделки выступает агент <span className={text-[#DB1E1E]}>ИТ Альянс</span><br/> с уставным капиталом 0,5 млрд рублей",
    "Оказание услуг «под ключ» с момента обращения до постановки авто на учёт в РФ",
    "Обширный выбор автомобилей разных ценовых категорий для личных и бизнес целей",
    "Обширный выбор автомобилей разных ценовых категорий для личных и бизнес целей",
    "Надёжная доставка в любую точку России и стран СНГ (крытые фуры / эвакуаторы / ЖД)",
  ];

  let cardServices = [
    {
      logo: v1,
      title: "Подбор",
      text: "Находим автомобили, отвечающие вашим требованиям",
    },
    {
      logo: v2,
      title: "Доставка",
      text: "Надежная и быстрая доставка вашего автомобиля",
    },
    {
      logo: v3,
      title: "Лизинг",
      text: "Сотрудничество с лизинговыми компаниями",
    },
    {
      logo: v4,
      title: "Страхование",
      text: "Оформляем страхование и подбираем лучшие условия для вашего автомобиля",
    },
  ];

  return (
    <main>
      <EdgeFireEffect />
      <section className="flex justify-center lg:pt-50 md:pt-40 pt-30 px-5">
        <img className="w-full" src={GroupLogo} alt="GroupLogo" />
      </section>

      <section className="md:px-15 px-5">
        <p className="text-[#FBFFFE] text-center 2xl:text-[22px] lg:text-[20px] md:text-[18px] text-[16px] mt-10 opacity-[80%]">
          AsiaAlliance — ваш надёжный партнёр в мире автомобилей. Мы помогаем
          выбрать и приобрести авто как инвестицию в комфорт, безопасность и
          стиль жизни, делая процесс простым, прозрачным и выгодным. Доверьте
          нам свою мечту — мы превратим её в реальность.
        </p>
      </section>

      <section className="px-4 sm:px-10 md:px-12 lg:px-16 xl:px-28 2xl:px-35 md:pt-50 pt-30 text-center">
        <MainTitleText>ПОРТФОЛИО</MainTitleText>

        <div className="lg:px-20 md:px-10 py-15">
          <p className="bg-[#FFFFFF09] text-white text-center text-[12px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] sm:text-[16px] uppercase border-[#FF0000] border-[1px] md:px-15 sm:px-10 px-5 py-4 rounded-[15px]">
            Чтобы вы могли оценить нашу работу не по словам, а по реальным
            результатам, мы подготовили{" "}
            <span className="text-[#DB1E1E]">портфолио</span> с автомобилями,
            которые уже были успешно привезены нашими специалистами. Каждая
            машина прошла детальную проверку в Корее, прозрачный процесс
            оформления и аккуратную доставку в Россию. Эти кейсы показывают, как
            мы работаем на каждом этапе — от подбора до момента передачи ключей.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-10">
          <ButtonWhite url="/insurance">Подробнее</ButtonWhite>
        </div>
      </section>

      <section className="md:pt-50 pt-30 md:pb-50 pb-30" ref={achievementsRef}>
        <EdgeFireEffect />
        <div className="flex justify-center">
          <img
            className="lg:w-50 md:w-35 sm:w-30 w-25"
            src={flags}
            alt="flags"
          />
        </div>
        <div className="pt-5">
          <MainTitleText>достижения</MainTitleText>
        </div>
        <div className="lg:px-50 md:px-30 sm-15 px-5">
          <p className="text-[#FBFFFE] text-justify lg:text-[22px] md:text-[18px] text-[16px] mt-10 opacity-[80%]">
            За годы работы AsiaAlliance прошла путь от небольшой компании до
            лидера в сфере подбора и привоза автомобилей из Азии. Нашими
            достижениями мы гордимся и рассматриваем их как стимул для
            дальнейшего развития и совершенствования.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex justify-center gap-10 pt-20 md:px-20 px-5">
          {cardLogos.map((item, index) => (
            <div
              className="flex gap-3 items-center px-4 py-2 rounded-[10px] bg-[#FFFFFF09]"
              key={index}
            >
              <div>
                <img className="flex-shrink-0" src={item.logo} alt="icon" />
              </div>
              <div>
                <p className="font-[600] 2xl:text-[22px] lg:text-[20px] text-[16px] text-white">
                  {item.title}
                </p>
                <p className="font-[400] lg:text-[16px] text-[14px] text-white opacity-[80%]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10">
        <EdgeFireEffect />
        <MainTitleText>наши преимущества</MainTitleText>

        <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-10">
          <div>
            {cardAdvantages1.map((item, index) => (
              <div
                className="flex my-2 md:h-[95px] sm:h-[115px] h-[95px] rounded-[10px] items-center md:pl-4 bg-[#FFFFFF09]"
                key={index}
              >
                <div className="flex-shrink-0 max-md:ml-5 text-[#DB1E1E] text-[22px] w-[50px] h-[50px] text-center flex justify-center items-center rounded-[8px] bg-[#FF00001A]">
                  {index + 1}
                </div>
                <p
                  className="w-fit text-white 2xl:text-[22px] lg:text-[18px] md:text-[14px] sm:text-[16px] text-[14px] ml-4 lg:mr-30 mr-5"
                  dangerouslySetInnerHTML={{ __html: item }}
                />{" "}
              </div>
            ))}
          </div>
          <div>
            {cardAdvantages2.map((item, index) => (
              <div
                className="flex my-2 md:h-[95px] sm:h-[115px] h-[95px] rounded-[10px] items-center md:pl-4 bg-[#FFFFFF09]"
                key={index}
              >
                <div className="flex-shrink-0 max-md:ml-5 text-[#DB1E1E] text-[22px] w-[50px] h-[50px] text-center flex justify-center items-center rounded-[8px] bg-[#FF00001A]">
                  {index + 8}
                </div>
                <p
                  className="w-fit text-white 2xl:text-[22px] lg:text-[18px] md:text-[14px] sm:text-[16px] text-[14px] ml-4 lg:mr-30 mr-5"
                  dangerouslySetInnerHTML={{ __html: item }}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-50" ref={servicesRef}>
        <EdgeFireEffect />
        <div className="px-5">
          <MainTitleText>Предоставляемые услуги</MainTitleText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-50 md:px-30 sm:px-20 px-5 md:mt-20 sm:mt-15 mt-10">
          {cardServices.map((item, index) => (
            <div
              className="p-5 bg-[#FFFFFF09] border-[2px] border-[#DB1E1E] rounded-[10px]"
              key={index}
            >
              <img src={item.logo} alt={item.logo} />
              <p className="text-white font-[600] text-[22px]">{item.title}</p>
              <p
                className="text-white font-[400] text-[16px]"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />{" "}
            </div>
          ))}
        </div>
      </section>

      <section ref={reviewsRef}>
        <EdgeFireEffect />
        <MainTitleText>ОТЗЫВЫ</MainTitleText>
        <p className="text-[#FBFFFE] text-center lg:text-[22px] md:text-[18px] text-[16px]  mt-10 opacity-[80%] 2xl:px-120 lg:px-50 md:px-30 sm:px-10 px-5">
          Мы в AsiaAlliance гордимся тем, что помогли множеству клиентов
          приобрести автомобиль своей мечты. Наша работа – это не просто пригон
          машин, это создание положительного опыта и построение долгосрочных
          отношений. Вот что говорят о нас наши клиенты:
        </p>

        <VideoSlider/>
      </section>

      <section className="relative">
        <img
          src={backstage}
          alt="backstage"
          className="w-full h-full object-contain sm:object-cover absolute opacity-[80%]"
        />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px]">
          <MainTitleText>Закулисье автоимпорта</MainTitleText>
          <p className="text-[#FBFFFE] text-center lg:text-[22px] md:text-[18px] text-[16px] mt-10 opacity-[80%] 2xl:px-120 lg:px-50 md:px-30 sm:px-10 px-5">
            Следите за нашей работой в различных социальных сетях,
            <br />
            задавайте вопросы и обязательно подписывайтесь!
          </p>

          <div className="flex gap-5 justify-center pt-6">
            <a
              href="https://www.youtube.com/channel/UC4dBL9-BuYZUsNDa7mcKMsA"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="48"
                viewBox="0 0 68 48"
                fill="none"
              >
                <path
                  d="M67.3227 10.3571C67.3227 10.3571 66.6586 5.65176 64.6133 3.58567C62.0234 0.866426 59.1281 0.853096 57.8 0.69314C48.2906 -3.81364e-07 34.0133 0 34.0133 0H33.9867C33.9867 0 19.7094 -3.81364e-07 10.2 0.69314C8.87187 0.853096 5.97656 0.866426 3.38672 3.58567C1.34141 5.65176 0.690625 10.3571 0.690625 10.3571C0.690625 10.3571 0 15.8889 0 21.4074V26.5793C0 32.0977 0.677344 37.6295 0.677344 37.6295C0.677344 37.6295 1.34141 42.3349 3.37344 44.401C5.96328 47.1202 9.36328 47.0269 10.8773 47.3202C16.3227 47.84 34 48 34 48C34 48 48.2906 47.9733 57.8 47.2935C59.1281 47.1336 62.0234 47.1202 64.6133 44.401C66.6586 42.3349 67.3227 37.6295 67.3227 37.6295C67.3227 37.6295 68 32.1111 68 26.5793V21.4074C68 15.8889 67.3227 10.3571 67.3227 10.3571ZM26.9742 32.8575V13.6762L45.3422 23.3002L26.9742 32.8575Z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="https://t.me/Asia_Alliance" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_186_2789)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM24.8601 17.7179C22.5257 18.6888 17.8603 20.6984 10.8638 23.7466C9.72766 24.1984 9.13251 24.6404 9.07834 25.0726C8.98677 25.803 9.90142 26.0906 11.1469 26.4822C11.3164 26.5355 11.4919 26.5907 11.6719 26.6492C12.8973 27.0475 14.5457 27.5135 15.4026 27.5321C16.1799 27.5489 17.0475 27.2284 18.0053 26.5707C24.5423 22.158 27.9168 19.9276 28.1286 19.8795C28.2781 19.8456 28.4852 19.803 28.6255 19.9277C28.7659 20.0524 28.7521 20.2886 28.7372 20.352C28.6466 20.7383 25.0562 24.0762 23.1982 25.8036C22.619 26.3421 22.2081 26.724 22.1242 26.8113C21.936 27.0067 21.7443 27.1915 21.56 27.3692C20.4215 28.4667 19.5678 29.2896 21.6072 30.6336C22.5873 31.2794 23.3715 31.8135 24.1539 32.3463C25.0084 32.9282 25.8606 33.5085 26.9632 34.2313C27.2442 34.4155 27.5125 34.6068 27.7738 34.7931C28.7681 35.5019 29.6615 36.1388 30.7652 36.0373C31.4065 35.9782 32.0689 35.3752 32.4053 33.5767C33.2004 29.3263 34.7633 20.1169 35.1244 16.3219C35.1561 15.9895 35.1163 15.5639 35.0843 15.3771C35.0523 15.1904 34.9855 14.9242 34.7427 14.7272C34.4552 14.4939 34.0113 14.4447 33.8127 14.4482C32.91 14.4641 31.5251 14.9456 24.8601 17.7179Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_186_2789">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
