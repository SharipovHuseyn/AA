import { Link, NavLink, useLocation } from "react-router-dom";
import { LogoIcon } from "../icons";
import Logo from "../../assets/images/header/logo.svg";
import { useState, useEffect } from "react";
import MenuIcon from "../icons/burger.svg";
import CloseIcon from "../icons/close.svg";
import telegramLogo from "../../assets/images/header/telegram.svg";
import whatsappLogo from "../../assets/images/header/whatsapp.svg";
import HomeButton from "../HomeButton";
import iconFrame from "../../assets/images/home/frame.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  const links = [
    { path: "/", label: "главная" },
    { path: "/catalog", label: "каталог" },
    { path: "/about", label: "о нас" },
    { path: "/contacts", label: "контакты" },
    { path: "/cars/FL", label: "клиентский путь", altPath: "/cars/UL" },
    { path: "/portfolio", label: "лизинг" },
    { path: "/insurance", label: "страхование" },
  ];

  return (
    <>
      <header className="z-101 fixed inset-x-0 top-0 z-50 bg-[#FFFFFF09] backdrop-blur-md h-[70px] sm:h-[80px] md:h-[90px]">
        <div className="max-w-[1920px] mx-auto flex items-center align-middle justify-between px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          <div className="hidden lg:flex items-center h-8 lg:h-9 xl:h-10 gap-3 lg:gap-4 xl:gap-6">
            <nav className="h-full flex items-center bg-[#FFFFFF08] rounded-full text-brand-white text-[10px] lg:text-[12px] xl:text-[13px] uppercase whitespace-nowrap p-4 py-8">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => {
                    const active =
                      isActive ||
                      (item.altPath &&
                        window.location.pathname === item.altPath);
                    return `px-5 ${
                      active
                        ? "text-[#DB1E1E] bg-[#DB1E1E1A] rounded-[50px] py-3"
                        : "hover:text-[#DB1E1E] transition-colors duration-300"
                    }`;
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden xl:flex">
              <a
                href="https://t.me/+79151249545"
                target="_blank"
                className="px-1"
              >
                <img src={telegramLogo} alt="telegramLogo" />
              </a>
              <a
                href="https://wa.me/79151249545"
                target="_blank"
                className="px-1"
              >
                <img src={whatsappLogo} alt="whatsappLogo" />
              </a>
            </div>

            <div className="hidden xl:block">
              <HomeButton icon={iconFrame} url="/contacts/#feedback-form">
                Оставить заявку
              </HomeButton>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <div className="flex mr-5">
              <a
                href="https://t.me/+79151249545"
                target="_blank"
                className="px-1"
              >
                <img src={telegramLogo} alt="telegramLogo" />
              </a>
              <a
                href="https://wa.me/79151249545"
                target="_blank"
                className="px-1"
              >
                <img src={whatsappLogo} alt="whatsappLogo" />
              </a>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {menuOpen ? (
                <img
                  src={CloseIcon}
                  alt="close"
                  className="w-8 h-8 sm:w-9 sm:h-9 transition-opacity duration-300"
                />
              ) : (
                <img
                  src={MenuIcon}
                  alt="menu"
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-opacity duration-300"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-md transition-all duration-300 z-40 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 z-100 left-0 w-full bg-[#030305] transition-all duration-300 overflow-y-auto z-50 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <nav className="flex flex-col items-center gap-0 py-4 px-4">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `w-full text-center py-4 sm:py-5 text-base sm:text-lg text-white uppercase font-semibold border-b border-brand-light-black last:border-b-0 ${
                  isActive
                    ? "text-[#DB1E1E]"
                    : "hover:text-[#DB1E1E] transition-colors duration-300"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          {/* Социальные иконки для мобильных */}
          <div className="flex justify-center gap-4 py-6">
            <a href="https://t.me/+79151249545" target="_blank" className="p-2">
              <img src={telegramLogo} alt="telegramLogo" className="w-8 h-8" />
            </a>
            <a href="https://wa.me/79151249545" target="_blank" className="p-2">
              <img src={whatsappLogo} alt="whatsappLogo" className="w-8 h-8" />
            </a>
          </div>

          {/* Кнопка для мобильных */}
          <div className="w-full px-4 py-6 flex justify-center">
            <HomeButton
              icon={iconFrame}
              url="/contacts/#feedback-form"
              onClick={() => setMenuOpen(false)}
            >
              Оставить заявку
            </HomeButton>
          </div>
        </nav>
      </div>
    </>
  );
}
