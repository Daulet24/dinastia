import { AdvantageCard } from "../../entities/AdvantageCard/index";
import heatingSystem from "../../assets/system.jpg";
import nearbyServices from "../../assets/hand.jpg";
import brickConstruction from "../../assets/wall.jpg";
//import greenArea from "../../assets/green-area.jpg";
import parking from "../../assets/parking.jpg";

export const Benefits = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl text-gray-900 font-montserrat font-bold mb-8">
        Преимущества
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[250px]">
        {/* First row */}
        <AdvantageCard
          title="Индивидуальная система отопления"
          image={heatingSystem}
          className="font-montserrat sm:col-span-2 row-span-2"
          textColor="black"
          buttonStyle="black-white"
        />

        <AdvantageCard
          title="Все под рукой"
          image={nearbyServices}
          className="font-montserrat"
          overlayDark
          buttonStyle="white-black"
        />

        {/* Second row */}
        <AdvantageCard
          title='Кирпичное строительство по технологии "Термос"'
          image={brickConstruction}
          className="font-montserrat bg-gray-400"
          showPlusButton={false}
          layout="horizontal"
        />

        {/* Third row */}
        <AdvantageCard
          title="Озелененная территория"
          image={"greenArea"}
          className="font-montserrat bg-gray-500"
          buttonStyle="white-black"
        />

        <AdvantageCard
          title="Большое количество парковочных мест"
          image={parking}
          className="font-montserrat sm:col-span-2 bg-gray-600"
          overlayDark
          buttonStyle="white-black"
        />
      </div>
    </section>
  );
};
