import React from "react";
import { INavLinks } from "../../shared/navLinks";
import logo from "../../assets/logo.svg";
import "./styles.module.scss";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <img src={logo} alt="Логотип" className="w-48 h-auto shrink-0" />
          <div className="text-base font-semibold text-gray-800 shrink-0">
            +7 999 999 99 99
          </div>
        </div>

        <nav>
          <div className="flex justify-between flex-nowrap w-full gap-4 font-montserrat text-gray-700 text-[clamp(10px,1.2vw,14px)]">
            {[
              ["Главная", "/home"],
              ["Преимущества", "/features"],
              ["Дополнения", "/additions"],
              ["Архитектура среды", "/architecture"],
              ["Обзор недвижимости", "/overview"],
              ["Ипотека", "/mortgage"],
              ["О проекте", "/project"],
              ["Оставить заявку", "/apply"],
              ["О компании", "/company"],
              ["Документация", "/documentation"],
              ["Сотрудничество", "/collaboration"],
            ].map(([text, href]) => (
              <div
                key={href}
                className="font-monserrat flex-1 whitespace-nowrap"
              >
                <INavLinks href={href} text={text} />
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
