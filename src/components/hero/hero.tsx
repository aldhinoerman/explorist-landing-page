import React from "react";

interface HeroProps {
  title: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <>
      <div>
        <h1 className="text-4xl md:text-6xl text-white">{title}</h1>
        {description && <p className="my-8 max-w-[550px] text-white">{description}</p>}
      </div>
    </>
  );
};

export default Hero;
