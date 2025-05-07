import React from "react";
import { Card } from "../../entities/card";
import Percent from "../../assets/percent.svg";
import Menu from "../../assets/menu.svg";
import Idk from "../../assets/idk.svg";

export const Main = () => {
  return (
    <div className=" w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        <Card title="Акции" text="Актуальные предложения" icon={Percent} />
        <Card
          title="Наши новости"
          text="Читай чтобы быть вкурсе последних новостей"
          icon={Menu}
        />
        <Card
          title="Гайд по этапам покупки недвижимости"
          text="Подробное описание важных этапов сделки"
          icon={Idk}
        />
      </div>
    </div>
  );
};
