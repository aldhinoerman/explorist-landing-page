import React from "react";
import { ICarouselItems } from "./utils";
import Link from "next/link";
import { Card } from "../card";

interface CarouselTestiProps {
  items: Array<ICarouselItems>;
}

const CarouselTesti: React.FC<CarouselTestiProps> = ({ items }) => {
  return (
    <>
      <div className="carousel carousel-center space-x-4 p-20">
        {items?.length > 0 &&
          items.map((obj, idx) => (
            <div id={`testi-${idx}`} className="carousel-item" key={idx}>
              <Card width={500} bodyClass="h-full" mobileWidth={200}>
                <div className="flex flex-col justify-center h-full gap-4 text-center">
                  <p>{obj.name}</p>
                  <p className="font-light">{obj.description}</p>
                </div>
              </Card>
            </div>
          ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {items?.length > 0 &&
          items.map((_, index) => (
            <Link href={`#testi-${index}`} key={index} className="btn btn-xs">
              {String(index + 1)}
            </Link>
          ))}
      </div>
    </>
  );
};

export default CarouselTesti;
