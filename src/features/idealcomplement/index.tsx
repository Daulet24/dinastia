import type React from "react";
import Remont from "../../assets/remont.jpg";
import Floor from "../../assets/floor.jpg";

interface ComplementCardProps {
  title: string;
  image?: string;
  children?: React.ReactNode;
  showPlusButton?: boolean;
  className?: string;
}

const ComplementCard: React.FC<ComplementCardProps> = ({
  title,
  image,
  children,
  showPlusButton = true,
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden p-6 sm:p-8 ${className}`}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
      {children}

      {showPlusButton && (
        <div className="absolute bottom-6 left-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
            <span className="text-white text-2xl font-light">+</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const IdealComplement = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl text-gray-900 font-montserrat font-bold mb-8">
        Идеальное дополнение
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ComplementCard
          title="Ремонт под ключ"
          image={Remont}
          className="text-white h-[280px]"
        />

        <ComplementCard
          title="Услуга теплый пол"
          image={Floor}
          className="text-white h-[280px]"
        />

        <ComplementCard
          title="Оставьте заявку и договориться о просмотре"
          className="bg-gray-100 h-[280px] flex flex-col justify-between"
          showPlusButton={false}
        >
          <p className="text-gray-700 mt-2 mb-auto">
            Наш менеджер свяжется с вами для уточнения времени
          </p>

          <button
            className="!bg-lime-700 hover:!bg-green-600 text-white w-full max-w-[240px] py-3 px-4 rounded-md font-medium transition-colors duration-200 mt-4"
            type="button"
          >
            Записаться на встречу
          </button>
        </ComplementCard>
      </div>
    </section>
  );
};
