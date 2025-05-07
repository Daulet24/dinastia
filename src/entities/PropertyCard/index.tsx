"use client";

import type React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  CupSoda,
  LifeBuoy,
} from "lucide-react";

export interface PropertyCardProps {
  title: string;
  className?: string;
}

export interface ApartmentsCardProps extends PropertyCardProps {
  buttonText: string;
  onButtonClick?: () => void;
}

export function ApartmentsCard({
  title,
  buttonText,
  onButtonClick,
  className,
}: ApartmentsCardProps) {
  return (
    <div
      className={`bg-[#1a2235] text-center font-montoserrat flex items-center justify-center text-white rounded-lg overflow-hidden h-[400px] relative ${className}`}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M50,50 L150,50 L150,150 L250,150 L250,50 L350,50 L350,350 L250,350 L250,250 L150,250 L150,350 L50,350 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="p-8 flex flex-col h-full justify-between relative z-10">
        <h4 className="font-montoserrat mb-4">{title}</h4>
        <div>
          <button className="bg-lime" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export interface InteriorCardProps extends PropertyCardProps {
  imageSrc: string | { src: string };
  imageAlt: string;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

export function InteriorCard({
  title,
  imageSrc,
  imageAlt,
  onPrevClick,
  onNextClick,
  className,
}: InteriorCardProps) {
  // Handle both string paths and imported image objects
  const imgSrc = typeof imageSrc === "string" ? imageSrc : imageSrc.src;

  return (
    <div
      className={`rounded-lg overflow-hidden h-[400px] relative group ${className}`}
    >
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={imageAlt}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <h2 className="text-2xl font-montosserat text-white p-8">{title}</h2>
      </div>
      {onPrevClick && (
        <div className="absolute top-1/2 left-2 -translate-y-1/2">
          <button
            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
            onClick={onPrevClick}
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      )}
      {onNextClick && (
        <div className="absolute top-1/2 right-2 -translate-y-1/2">
          <button
            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
            onClick={onNextClick}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export interface CommercialCardProps extends PropertyCardProps {
  description: string;
  icons?: React.ReactNode[];
}

export function CommercialCard({
  title,
  description,
  icons,
  className,
}: CommercialCardProps) {
  return (
    <div
      className={`bg-[#e6e9f0] text-center  rounded-lg  overflow-hidden h-[400px] relative ${className}`}
    >
      <div className="absolute top-0 right-0">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          <path
            d="M0,0 Q100,50 150,0 Q200,100 150,200 Q50,150 0,200 Q-50,100 0,0 Z"
            fill="#aec25b"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0">
        <svg viewBox="0 0 200 200" className="w-32 h-32">
          <path
            d="M0,0 Q100,50 150,0 Q200,100 150,200 Q50,150 0,200 Q-50,100 0,0 Z"
            fill="#aec25b"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="p-8 flex flex-col h-full justify-between relative z-10">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>

        {icons && icons.length > 0 ? (
          <div className="flex justify-center gap-8 mb-6">
            {icons.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center gap-8 mb-6">
            <Coffee className="w-10 h-10" />
            <CupSoda className="w-10 h-10" />
            <LifeBuoy className="w-10 h-10" />
          </div>
        )}

        <p className="text-center text-sm">{description}</p>
      </div>
    </div>
  );
}
