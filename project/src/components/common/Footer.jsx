import { Link } from "react-router-dom";
import LogoRed from "../../assets/logo-red.svg";
const Footer = () => {
  return (
    <footer className="relative z-90 bg-[#FFFFFF09] p-5 lg:p-15 pb-18">
      <div className="flex items-start justify-between grid gap-5 grid-cols-3 md:grid-cols-5">
        <div>
          <a href="/">
            <p className="text-white text-[15px] lg:text-[18px] font-[500] pb-2">
              ГЛАВНАЯ
            </p>
          </a>
          <ul className="text-[300] text-white text-[12px] lg:text-[14px]">
            <a href="/#quality">
              <li className="py-1 hover:text-[#DB1E1E]">Качество</li>
            </a>
            <a href="/#leasing">
              <li className="py-1 hover:text-[#DB1E1E]">Лизинг</li>
            </a>
            <a href="/#individualized-approach">
              <li className="py-1 hover:text-[#DB1E1E]">
                Индивидуальный подход
              </li>
            </a>
          </ul>
        </div>

        <div>
          <a href="/catalog">
            <p className="text-white text-[15px] lg:text-[18px] font-[500] pb-2">
              КАТАЛОГ
            </p>
          </a>
          <ul className="text-[300] text-white text-[14px]">
            <a href="/catalog#select-car">
              <li className="py-1 hover:text-[#DB1E1E]">Выбрать авто</li>
            </a>
            <a href="/catalog#about-car">
              <li className="py-1 hover:text-[#DB1E1E]">Узнать про авто</li>
            </a>
          </ul>
        </div>

        <div>
          <a href="/about">
            <p className="text-white text-[15px] lg:text-[18px] font-[500] pb-2">
              О НАС
            </p>
          </a>
          <ul className="text-[300] text-white text-[14px]">
            <a href="/about#achievements">
              <li className="py-1 hover:text-[#DB1E1E]">Достижения</li>
            </a>
            <a href="/about#services">
              <li className="py-1 hover:text-[#DB1E1E]">Услуги</li>
            </a>
            <a href="/about#reviews">
              <li className="py-1 hover:text-[#DB1E1E]">Отзывы</li>
            </a>
            <a href="/about#behind">
              <li className="py-1 hover:text-[#DB1E1E]">Закулисье</li>
            </a>
          </ul>
        </div>

        <div>
          <a href="/contacts">
            <p className="text-white text-[15px] lg:text-[18px] font-[500] pb-2">
              КОНТАКТЫ
            </p>
          </a>
          <ul className="text-[300] text-white text-[14px]">
            <a href="/contacts#feedback-form">
              <li className="py-1 hover:text-[#DB1E1E]">Оставить заявку</li>
            </a>
          </ul>
        </div>

        <div>
          <a href="/cars/fl">
            <p className="text-white text-[15px] lg:text-[18px] font-[500] pb-2">
              КЛИЕНТСКИЙ ПУТЬ
            </p>
          </a>
          <ul className="text-[300] text-white text-[14px]">
            <a href="/cars/FL">
              <li className="py-1 hover:text-[#DB1E1E]">
                Для физического лица
              </li>
            </a>
            <a href="/cars/Ul">
              <li className="py-1 hover:text-[#DB1E1E]">
                Для юридического лица
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
