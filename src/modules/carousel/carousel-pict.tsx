import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { ICarouselItems } from "./utils";
import { useParams } from "next/navigation";
import { renderImage } from "@/utils";

interface CarouselPictProps {
  type: "testi" | "pict" | null | undefined;
  scroll?: boolean;
  to?: string;
  useId?: boolean;
  items: Array<ICarouselItems>;
  onScrollControl?: (direction: 'left' | 'right') => void;
}

export interface CarouselHandle {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const CarouselPict = forwardRef<CarouselHandle, CarouselPictProps>((
  {
    scroll,
    useId,
    to,
    items,
    type,
    onScrollControl,
  },
  ref
) => {
  const params = useParams();
  const { locale } = params;
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
          const container = carouselRef.current;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          const scrollAmount = 280; // Approximate width of one item
          
          if (container.scrollLeft >= maxScrollLeft - 50) {
            // Reset to start when near the end
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            // Scroll by one item width
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 3000); // Adjust scroll interval as needed
    }

    return () => clearInterval(scrollInterval); // Clean up on unmount
  }, [scrollEvent]);

  // Expose scroll methods through ref
  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const scrollAmount = 280;
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    },
    scrollRight: () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const scrollAmount = 280;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScrollLeft - 50) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    },
  }));

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="w-full overflow-hidden">
        <div
          ref={carouselRef}
          onMouseEnter={() => handleScrollEvent(false)}
          onMouseLeave={() => handleScrollEvent(true)}
          className="custom-scrollbar flex gap-4 overflow-x-auto scroll-smooth p-4"
      >
        {items?.length > 0 &&
          items.map((obj, idx) => (
            <Link
              href={
                to
                  ? `/${locale}/${to}${
                      useId && obj?.id
                        ? `/${obj.id}`
                        : obj?.slug
                        ? `/${obj.slug}`
                        : ""
                    }`
                  : obj?.slug
                  ? `/${locale}/${obj.slug}`
                  : obj?.link || "#"
              }
              key={idx}
              className="flex-shrink-0"
            >
              <div
                id={`${type}-${idx}`}
                className="block cursor-pointer group"
              >
                <div className="relative w-[220px] sm:w-[250px] md:w-[280px] h-[300px] sm:h-[350px] md:h-[380px] rounded-3xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <Image
                    src={renderImage(
                      typeof obj?.image === "string"
                        ? obj.image
                        : obj?.image?.url || obj?.pict || ""
                    )}
                    alt={obj?.title || `carousel-img-${idx}`}
                    fill
                    style={{ objectFit: "cover", filter: "brightness(75%)" }}
                    sizes="(max-width: 768px) 250px, (max-width: 1200px) 300px, 350px"
                    priority={idx < 3}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 sm:p-4">
                    <h3 className="!text-white/90 text-center font-bold text-lg sm:text-xl md:text-2xl leading-tight drop-shadow-lg">
                      {obj.title || obj.name}
                    </h3>
                    {obj.description && (
                      <p className="text-white/90 text-center text-xs sm:text-sm mt-1 line-clamp-2 drop-shadow">
                        {obj.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );

});

CarouselPict.displayName = 'CarouselPict';

export default CarouselPict;
