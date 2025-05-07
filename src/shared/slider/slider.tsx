import type React from "react";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

interface CustomSwiperProps {
  slides: Slide[];
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ slides }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full h-full bg-white">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        slidesPerView={1}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-4xl"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-start">
                <div className="max-w-xl p-10 text-white text-left">
                  <h2 className="text-5xl font-bold mb-4 break-words">
                    {slide.title}
                  </h2>
                  <p className="text-lg mb-6 break-words">{slide.subtitle}</p>
                  <button className="bg-lime-400 hover:bg-lime-500 transition px-6 py-3 rounded mb-6">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Стрелки и пагинация под слайдером */}
      <div className="flex items-center justify-center space-x-6 mt-4">
        <button
          ref={prevRef}
          className="w-10 h-10 flex items-center justify-center bg-gray-400/60 hover:bg-gray-500 text-white rounded-full"
        >
          ❮
        </button>
        <div className="custom-pagination flex items-center space-x-2" />
        <button
          ref={nextRef}
          className="w-10 h-10 flex items-center justify-center bg-gray-400/60 hover:bg-gray-500 text-white rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CustomSwiper;
