import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ICarouselItems } from "./utils";

interface CarouselPictProps {
  type: "testi" | "pict" | null | undefined;
  scroll?: boolean;
  items: Array<ICarouselItems>;
}

const CarouselPict = ({ scroll, items, type }: CarouselPictProps) => {
  const carouselRef = useRef<null | HTMLDivElement>(null);

  const [scrollEvent, setScrollEvent] = useState(true);

  useEffect(() => {
    handleScrollEvent(scroll ?? false);
  }, [scroll]);

  const handleScrollEvent = (status: boolean) => {
    setScrollEvent(status);
  };

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;

    if (scrollEvent) {
      scrollInterval = setInterval(() => {
        if (carouselRef.current) {
          const maxScrollLeft =
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
          if (carouselRef.current.scrollLeft >= maxScrollLeft) {
            carouselRef.current.scrollLeft = 0; // Reset scroll to the start
          } else {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 3000); // Adjust scroll interval as needed
    }

    return () => clearInterval(scrollInterval); // Clean up on unmount
  }, [scrollEvent]);

  return (
    <div
      ref={carouselRef}
      onMouseEnter={() => handleScrollEvent(false)}
      onMouseLeave={() => handleScrollEvent(true)}
      className="carousel carousel-center bg-neutral rounded-box max-w-[300px] sm:max-w-[350px] md:max-w-2xl space-x-4 p-4 overflow-x-auto"
    >
      {items?.length > 0 &&
        items.map((obj, idx) => (
          <Link href={obj?.link ?? ""} key={idx}>
            <div
              id={`${type}-${idx}`}
              className="carousel-item block cursor-pointer"
            >
              <div className="relative w-[250px] h-[350px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={obj?.image ?? ""}
                  alt={`carousel-img-${idx}`}
                  fill
                  style={{ objectFit: "cover", filter: "brightness(75%)" }}
                  sizes="100%"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-transparent to-transparent p-4">
                  <h3 className="text-white text-center font-bold text-2xl">
                    {obj.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CarouselPict;
