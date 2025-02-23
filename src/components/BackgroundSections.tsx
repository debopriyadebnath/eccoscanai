import React from "react";

interface BackgroundSectionProps {
  imageUrl: string;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-full h-full overflow-hidden z-0">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default BackgroundSection;