"use client";
// import Image from "next/image";
import React from "react";
import CarouselTesti from "./carousel-testi";
import CarouselPict from "./carousel-pict";
import { ICarouselItems } from "./utils";

interface CarouselProps {
  type?: "testi" | "pict" | null | undefined;
  scroll?: boolean;
  useId?: boolean;
  to?: string;
  items: Array<ICarouselItems>;
}

const Carousel = ({
  type = "pict",
  useId,
  to,
  scroll,
  items,
}: CarouselProps) => {
  const Components = () => {
    if (type === "testi") {
      return <CarouselTesti items={items} />;
    } else {
      return (
        <CarouselPict
          type={type}
          items={items}
          scroll={scroll}
          useId={useId}
          to={to}
        />
      );
    }
  };
  return <Components />;
};

export default Carousel;
