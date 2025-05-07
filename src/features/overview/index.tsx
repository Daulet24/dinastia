import { Coffee, CupSoda, LifeBuoy } from "lucide-react";
import RealEstateOverview from "../../shared/overwievSlider/index";
import {
  ApartmentsCard,
  InteriorCard,
  CommercialCard,
} from "../../entities/PropertyCard/index";

import interiorImage from "../../assets/otdelka.jpg";

export const Overview = () => {
  return (
    <main>
      <RealEstateOverview
        title="Обзор недвижимости"
        cards={[
          <ApartmentsCard
            key="apartments"
            title="КВАРТИРЫ"
            buttonText="Перейти к планировкам"
            onButtonClick={() => console.log("Navigate to floor plans")}
          />,
          <InteriorCard
            key="interior"
            title="ОТДЕЛКА"
            imageSrc={interiorImage}
            imageAlt="Интерьер квартиры"
            onPrevClick={() => console.log("Previous interior image")}
            onNextClick={() => console.log("Next interior image")}
          />,
          <CommercialCard
            key="commercial"
            title="КОММЕРЦИЯ"
            description="На территории жилого комплекса предусмотрены площади для коммерческого назначения"
            icons={[
              <Coffee key="coffee" className="w-16 h-16" />,
              <CupSoda key="cup" className="w-16 h-16" />,
              <LifeBuoy key="life" className="w-16 h-16" />,
            ]}
          />,
        ]}
      />
    </main>
  );
};
