"use client";

import { Button, Carousel, Loading, SectionWrapper } from "@/modules";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useRequest } from "@/utils";
import { NotFound } from "../error";
import { useTranslations } from "next-intl";

interface DestinationsProps {}

const Destinations = () => {
  const params = useParams();
  const { locale } = params;
  const t = useTranslations();
  const [slide, setSlide] = useState<string>(String(0));
  const [isScrolling, setIsScrolling] = useState<boolean>(true);

  const paramsFetch = {
    param: "filters[$and][0][key][$ne]=activity&filters[$and][1][key][$ne]=car",
  };

  const { data: destinations, loading } = useRequest<DestinationsProps[]>(
    `categories`,
    {
      ...paramsFetch,
    }
  );
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
          <h2 className="mb-8">{t("home.destinations.title")}</h2>
          <p className="text-xl font-light">
            {t("home.destinations.description")}
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
              disabled={Boolean(Number(slide) + 1 === destinations?.length)}
              square
            />
          </div>
        </div>
        <div>
          {loading ? (
            <Loading />
          ) : destinations && destinations?.length > 0 ? (
            <Carousel
              items={destinations ?? []}
              scroll={isScrolling}
              to={`${locale}/package`}
              useId
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
