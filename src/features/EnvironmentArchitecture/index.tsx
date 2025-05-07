import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Basket from "../../assets/basket.jpg";
import type SwiperType from "swiper";

//@ts-ignore
import "swiper/css";

export const EnvironmentArchitecture = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(4);

  const images = [
    "/images/architecture-1.jpg",
    "/images/architecture-2.jpg",
    "/images/architecture-3.jpg",
    "/images/architecture-4.jpg",
  ];

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-gray-900">
            Архитектура среды
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-700 mb-4">
            Почувствуйте комфорт проживания за счёт продуманного функционального
            зонирования: интерактивные зоны, тротуары, парковочные места, а так
            же, коммерческая инфраструктура - совокупность факторов, которые
            соединились в одном жилом комплексе "Парковый"
          </p>
          <div className="w-16 h-0.5 bg-green-500"></div>
        </div>
      </div>

      {/* Slider section */}
      <div className="relative rounded-xl overflow-hidden">
        <Swiper
          onSwiper={(swiperInstance) => {
            setSwiper(swiperInstance);
            setTotalSlides(swiperInstance.slides.length);
          }}
          onSlideChange={(swiperInstance) => {
            setActiveIndex(swiperInstance.activeIndex);
          }}
          modules={[Navigation, Pagination]}
          className="w-full"
          style={{ position: "relative" }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[500px]">
                <img
                  src={Basket}
                  alt={`Architecture slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <button
          onClick={() => swiper?.slidePrev()}
          className="absolute left-4 top-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center cursor-pointer transform -translate-y-1/2 text-white"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => swiper?.slideNext()}
          className="absolute right-4 top-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center cursor-pointer transform -translate-y-1/2 text-white"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Custom pagination */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 text-white px-6 py-2 rounded-full flex items-center justify-center">
          <span>{formatNumber(activeIndex + 1)}</span>
          <span className="mx-1">/</span>
          <span>{formatNumber(totalSlides)}</span>
        </div>
      </div>
    </section>
  );
};
