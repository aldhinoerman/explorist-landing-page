"use client";
// import Image from "next/image";
import React from "react";
import CarouselTesti from "./carousel-testi";
import CarouselPict from "./carousel-pict";
import { ICarouselItems } from "./utils";

interface CarouselProps {
  type?: "testi" | "pict" | null | undefined;
  scroll?: boolean;
  items: Array<ICarouselItems>;
}

const Carousel = ({ type = "pict", scroll, items }: CarouselProps) => {
  const Components = () => {
    if (type === "testi") {
      return <CarouselTesti items={items} />;
    } else {
      return <CarouselPict type={type} items={items} scroll={scroll} />;
    }
  };
  return <Components />;
};

export default Carousel;
