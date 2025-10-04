"use client";
// import Image from "next/image";
import React, { forwardRef } from "react";
import CarouselTesti from "./carousel-testi";
import CarouselPict, { CarouselHandle } from "./carousel-pict";
import { ICarouselItems } from "./utils";

interface CarouselProps {
  type?: "testi" | "pict" | null | undefined;
  scroll?: boolean;
  to?: string;
  items: Array<ICarouselItems>;
  onScrollControl?: (direction: 'left' | 'right') => void;
}

const Carousel = forwardRef<CarouselHandle, CarouselProps>((
  {
    type = "pict",
    to,
    scroll,
    items,
    onScrollControl,
  },
  ref
) => {
  const Components = () => {
    if (type === "testi") {
      return <CarouselTesti items={items} />;
    } else {
      return (
        <CarouselPict
          ref={ref}
          type={type}
          items={items}
          scroll={scroll}
          to={to}
          onScrollControl={onScrollControl}
        />
      );
    }
  };
  return <Components />;
});

Carousel.displayName = 'Carousel';

export default Carousel;
