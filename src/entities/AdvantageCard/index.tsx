interface IAdvantageCardProps {
  title: string;
  image: string;
  className?: string;
  overlayDark?: boolean;
  circleImage?: boolean;
  showPlusButton?: boolean;
  textColor?: string;
  buttonStyle?: "black-white" | "white-black"; // Updated prop for button style combinations
  layout?: "default" | "horizontal";
}

export const AdvantageCard = ({
  title,
  image,
  className = "",
  overlayDark = false,
  showPlusButton = true,
  textColor = "white",
  buttonStyle = "white-black", // Default to white button with black plus
  layout = "default",
}: IAdvantageCardProps) => {
  // Determine button classes based on buttonStyle
  // Format is "button-plus" where first color is button bg, second is plus color
  const buttonClasses =
    buttonStyle === "black-white"
      ? "bg-black text-white"
      : "bg-white text-black";

  if (layout === "horizontal") {
    return (
      <div
        className={`relative rounded-xl overflow-hidden flex items-center p-6 sm:p-8 ${className}`}
      >
        <div className="flex-1 z-10">
          <h3
            className={`text-base sm:text-xl font-semibold text-${textColor}`}
          >
            {title}
          </h3>
        </div>
        <div className="flex-1">
          <div
            className="ml-10 h-40 w-40 rounded-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "120px",
            }}
          ></div>
        </div>
      </div>
    );
  }

  // Default layout
  return (
    <div
      className={`relative rounded-xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {overlayDark && <div className="absolute inset-0 bg-black/30 z-0"></div>}

      <h3
        className={`relative z-10 text-base sm:text-xl font-semibold max-w-[80%] text-${textColor}`}
      >
        {title}
      </h3>

      {showPlusButton && (
        <div className="relative z-10 flex justify-end">
          <div className="mt-4">
            <button
              className={`rounded-full w-8 h-10 sm:w-8 sm:h-10 ${buttonClasses} flex items-center justify-center`}
            >
              <span className="text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
