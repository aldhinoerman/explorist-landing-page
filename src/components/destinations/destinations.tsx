"use client";

import { Button, Carousel, SectionWrapper } from "@/modules";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { destinations } from "./utils";
import { useRouter } from "next/navigation";

const Destinations = () => {
  const [slide, setSlide] = useState<string>(String(0));
  const [isScrolling, setIsScrolling] = useState<boolean>(true);
  const router = useRouter();

  const handleNextSlide = () => {
    setIsScrolling(false);
    setSlide((prevState) => {
      const val = Number(prevState) + 1;

      slideImage(String(val));

      return String(val);
    });
  };

  const handlePrevSlide = () => {
    setIsScrolling(false);
    setSlide((prevState) => {
      const val = Number(prevState) - 1;

      slideImage(String(val));

      return String(val);
    });
  };

  const slideImage = (val: string) => {
    router.push(`#pict-${val}`);
  };

  return (
    <SectionWrapper id="package">
      <div className="flex flex-wrap align-middle justify-center gap-4">
        <div className="flex flex-col justify-center w-full md:min-w-[350px] max-w-[500px]">
          <h2 className="mb-8">Destinations You Shouldn&apos;t Miss</h2>
          <p className="text-xl font-light">
            Choose Your Destination and Contact Our Experts for the Best Deals!
          </p>

          <div className="flex align-middle justify-end gap-2 mt-4">
            <Button
              variant="primary"
              size="small"
              icon={
                <ChevronLeftIcon className="w-4 h-4 m-auto font-semibold" />
              }
              onClick={handlePrevSlide}
              disabled={Number(slide) === 0}
              square
            />
            <Button
              variant="primary"
              size="small"
              icon={
                <ChevronRightIcon className="w-4 h-4 m-auto font-semibold" />
              }
              onClick={handleNextSlide}
              disabled={Boolean(Number(slide) + 1 === destinations.length)}
              square
            />
          </div>
        </div>
        <div>
          <Carousel items={destinations} scroll={isScrolling} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Destinations;
