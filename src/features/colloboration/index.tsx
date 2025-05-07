import React from "react";
import { Download } from "lucide-react";
import FooterLogo from "../../assets/footer.svg";
import Helmet from "../../assets/helmet.png";

export const CollaborationSection = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("usi34@yandex.ru");
  };

  return (
    <section className="bg-[#0F1524] text-white px-4 md:px-20 py-16">
      <div className="max-w-8xl mx-auto mb-16">
        <div className="bg-[#2C3243] rounded-lg px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-montoserrat font-medium">
            Документация
          </span>
          <Download className="w-6 h-6 text-lime-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="font-montoserrat text-2xl font-semibold uppercase mb-4">
            Информация <br />
            о сотрудничестве <br />
            для подрядных организаций
          </h3>
          <p className="font-montoserrat mb-4 text-gray-300">
            Направляйте коммерческое предложение и предложения о сотрудничестве
            по форме
          </p>
          <p className="text-lg font-medium mb-4">usi34@yandex.ru</p>
          <button
            onClick={handleCopy}
            className="font-montoserrat bg-white text-white px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Скопировать почту
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={Helmet} alt="Каска" className="w-[300px] h-auto" />
        </div>
      </div>

      <div className="font-montoserrat mt-20 grid md:grid-cols-3 gap-12 text-sm text-gray-300">
        <div>
          <img src={FooterLogo} alt="Династия" className="mb-4 w-32" />
          <p>
            ООО «СЗ ЮГСТРОЙИНВЕСТ ПЛЮС»
            <br />– застройщик из Волжского
          </p>
          <div className="flex space-x-4 mt-4">
            <img src="/tg.svg" alt="Telegram" className="w-6" />
            <img src="/vk.svg" alt="VK" className="w-6" />
          </div>
        </div>

        <div className="font-montoserrat grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p>Главная</p>
            <p>Преимущества</p>
            <p>Дополнения</p>
            <p>Архитектура среды</p>
          </div>
          <div className="font-montoserrat space-y-2">
            <p>Обзор недвижимости</p>
            <p>Ипотека</p>
            <p>О проекте</p>
            <p>Оставить заявку</p>
            <p>О компании</p>
            <p>Документация</p>
            <p>Сотрудничество</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-white font-montoserrat">Отдел продаж:</p>
            <p>8-961-082-32-32</p>
          </div>
          <div>
            <p className="text-white font-montoserrat">Отдел маркетинга:</p>
            <p>8-961-680-11-11</p>
          </div>
          <div>
            <p className="text-white font-montoserrat">Отдел снабжения:</p>
            <p>usi34@yandex.ru</p>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
        Любая информация, представленная на данном сайте, носит исключительно
        информационный характер, не является публичной офертой, определяемой
        положениями статьи 437 ГК РФ.
        <br />
        Политика конфиденциальности
      </div>
    </section>
  );
};
