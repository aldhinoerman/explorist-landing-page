"use client";

import { Button, Carousel, Loading, SectionWrapper } from "@/modules";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { useState, useRef } from "react";
import type { CarouselHandle } from "@/modules/carousel/carousel-pict";
import { useParams } from "next/navigation";
import { useRequest } from "@/utils";
import { NotFound } from "../error";
import { useTranslations } from "next-intl";

interface DestinationsProps {
  destination: any;
}

const Destinations = (props: DestinationsProps) => {
  const { destination } = props;
  const params = useParams();
  let { locale } = params;

  if (Array.isArray(locale)) {
    locale = locale[0];
  }
  const t = useTranslations();
  const [isScrolling, setIsScrolling] = useState<boolean>(true);
  const carouselRef = useRef<CarouselHandle>(null);

  const paramsFetch = {
    param: "populate=*",
  };

  const { data: destinations, loading } = useRequest<any[]>(
    `areas`,
    {
      ...paramsFetch,
    },
    locale
  );
  const handleNextSlide = () => {
    setIsScrolling(false);
    // Use ref to control carousel
    carouselRef.current?.scrollRight();
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsScrolling(true), 3000);
  };

  const handlePrevSlide = () => {
    setIsScrolling(false);
    // Use ref to control carousel
    carouselRef.current?.scrollLeft();
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsScrolling(true), 3000);
  };

  return (
    <SectionWrapper id="package">
      <div className="flex align-middle justify-center gap-4">
        <div className="flex flex-col justify-center w-full md:min-w-[350px] max-w-[500px]">
          <h2 className="mb-8">
            {destination?.title ?? t("home.destinations.title")}
          </h2>
          <p className="text-xl font-light">
            {destination?.description ?? t("home.destinations.description")}
          </p>

          <div className="flex align-middle justify-end gap-2 mt-4">
            <Button
              variant="primary"
              size="small"
              className="!text-black"
              icon={
                <ChevronLeftIcon className="w-4 h-4 m-auto font-semibold" />
              }
              onClick={handlePrevSlide}
              square
            />
            <Button
              variant="primary"
              size="small"
              className="!text-black"
              icon={
                <ChevronRightIcon className="w-4 h-4 m-auto font-semibold" />
              }
              onClick={handleNextSlide}
              square
            />
          </div>
        </div>
        <div className="w-full max-w-4xl">
          {loading ? (
            <Loading />
          ) : destinations && destinations?.length > 0 ? (
            <Carousel
              ref={carouselRef}
              items={destinations ?? []}
              scroll={isScrolling}
              to={`area`}
            />
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Destinations;
