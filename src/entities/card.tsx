import React from "react";

interface ICardProps {
  className?: string;
  href?: string;
  title?: string;
  text?: string;
  icon?: string;
}

export const Card = ({
  text,
  className = "",
  href = "#",
  title = "",
  icon,
}: ICardProps) => {
  return (
    <a
      href={href}
      title={title}
      className={`flex flex-col justify-between bg-white rounded-2xl shadow-md p-6 sm:p-8 w-full min-h-[220px] hover:shadow-lg transition duration-300 ${className}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-black">
          {title}
        </h2>
        {icon && (
          <img src={icon} alt="Иконка" className="w-10 h-10 object-contain" />
        )}
      </div>
      <p className="mt-20 text-sm sm:text-base text-gray-600">{text}</p>
    </a>
  );
};
