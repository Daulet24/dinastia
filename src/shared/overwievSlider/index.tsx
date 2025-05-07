import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface IRealEstateOverviewProps {
  title: string;
  cards: ReactNode[];
}

export default function RealEstateOverview({
  title,
  cards,
}: IRealEstateOverviewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>

      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>

      <div className="md:hidden relative">
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {card}
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
