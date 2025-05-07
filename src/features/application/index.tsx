import React from "react";
import Girl from "../../assets/girl.png";

export const ApplicationSection = () => {
  return (
    <section className="bg-[#1E2233] py-16 px-4 md:px-20 text-white">
      <div className="bg-white text-black rounded-lg p-8 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Оставить заявку</h2>
          <p className="text-lg mb-6">Запишитесь на просмотр квартиры</p>

          <form className="flex flex-col sm:flex-row gap-4 mb-2">
            <input
              type="text"
              placeholder="Имя"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
            />
            <input
              type="text"
              placeholder="Номер"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
            />
            <button className="bg-lime-500 text-white px-6 py-2 rounded-md">
              Записаться на встречу
            </button>
          </form>
          <p className="text-xs text-gray-600 max-w-md">
            Нажимая на кнопку, вы подтверждаете, что ознакомились с политикой
            обработки персональных данных и даете согласие на обработку
            персональных данных
          </p>
        </div>
        <div className="w-60 h-60 relative">
          <div className="bg-lime-200 w-full h-full rounded-full absolute top-0 left-0 scale-125 -z-10" />
          <img
            src={Girl}
            alt="Менеджер"
            className="object-contain w-full h-full rounded-full"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-4">О компании</h2>
        <p className="text-lg text-gray-300 max-w-4xl border-l-4 border-lime-500 pl-4 mb-12">
          <span className="text-white font-semibold">СтройИнвест Плюс</span> —
          надежная, динамично развивающаяся девелоперская компания полного
          цикла, реализующая крупные проекты в сфере жилой и коммерческой
          недвижимости на территории Российской Федерации
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center text-white">
          <div>
            <p className="text-2xl font-semibold">4</p>
            <p className="text-sm text-gray-300 mt-1">Реализованные проекты</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">5</p>
            <p className="text-sm text-gray-300 mt-1">
              Домов на этапе строительства
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">10+</p>
            <p className="text-sm text-gray-300 mt-1">
              Лет на рынке недвижимости
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">14</p>
            <p className="text-sm text-gray-300 mt-1">
              Домов введено в эксплуатацию
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">10 000+</p>
            <p className="text-sm text-gray-300 mt-1">Счастливых жителей</p>
          </div>
          <div>
            <div className="text-2xl">⭐</div>
            <p className="text-sm text-gray-300 mt-1">
              Все объекты сданы в срок
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
