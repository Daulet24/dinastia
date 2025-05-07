import React from "react";
import CustomSwiper from "../../shared/slider/slider";
import Parkovy from "../../assets/main.png";
import Parkovy2 from "../../assets/main2.png";

export const Home = () => {
  const slides = [
    {
      image: Parkovy,
      title: "Жилой комплекс “ПАРКОВЫЙ”",
      subtitle: "Успей оформить квартиру на выгодных условиях",
      buttonText: "Подобрать квартиру",
    },
    {
      image: Parkovy2,
      title: "Жилой комплекс “НОВЫЙ”",
      subtitle: "Новые квартиры по акции",
      buttonText: "Выбрать квартиру",
    },
    {
      image: Parkovy,
      title: "Элитный ЖК “SKY”",
      subtitle: "Роскошные квартиры с видом на город",
      buttonText: "Подробнее",
    },
  ];

  return (
    <div className="w-full h-full max-w-7xl mx-auto my-3">
      <CustomSwiper slides={slides} />
    </div>
  );
};
