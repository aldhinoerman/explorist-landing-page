"use client";

import { Button, Card } from "@/modules";
import { formatCurrency, renderImage, TourPackagesProps } from "@/utils";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { ICardItem } from "./utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface CardItemProps {
  withSub?: boolean;
  data: ICardItem | TourPackagesProps;
  to?: string;
  useId?: boolean;
  mobileWidth?: number;
  btnText?: string;
  width?: number;
}

const CardItem = ({
  data,
  withSub,
  to,
  mobileWidth,
  btnText,
  width,
  useId,
}: CardItemProps) => {
  const params = useParams();
  const { locale } = params;
  const t = useTranslations();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const getCheapestPrice = useCallback(() => {
    if (!data?.package_items?.length) return data?.price || null;

    const prices = data.package_items
      .map((item) => item.price)
      .filter((price): price is number => typeof price === 'number' && price > 0);

    if (prices.length === 0) return data?.price || null;

    return Math.min(...prices);
  }, [data?.package_items, data?.price]);

  const cheapestPrice = getCheapestPrice();

  const isCarCharter = useCallback(() => {
    const tourData = data as TourPackagesProps;
    return (
      tourData?.categories?.some(
        (category) => category.slug === "car-charter"
      ) || false
    );
  }, [data]);

  const isCar = isCarCharter();

  const getRandomIndex = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomPict = useCallback(() => {
    if (data?.package_items && data?.package_items?.length > 1) {
      const interval = setInterval(() => {
        setFade(true);

        setTimeout(() => {
          const packageItems = data?.package_items ?? [];

          if (packageItems.length > 0) {
            setCurrentImageIndex(getRandomIndex(packageItems.length));
          }

          setFade(false);
        }, 500);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [data?.package_items]);

  useEffect(() => {
    getRandomPict();
  }, [getRandomPict]);

  return (
    <Card
      bodyClass={`flex flex-col ${cheapestPrice ? "justify-between" : ""}`}
      width={width}
      mobileWidth={mobileWidth}
    >
      {(data?.image?.url || data?.package_items?.length) && (
        <Link
          href={
            to
              ? `/${locale}/${to}${useId && data?.id ? `/${data.id}` : ""}`
              : (data?.key && locale + data?.key) ||
                `/${locale}/details/${
                  (data as TourPackagesProps)?.slug || data?.id
                }`
          }
          className="w-full"
        >
          <Image
            src={renderImage(
              data?.package_items?.[currentImageIndex]?.image?.url || ""
            )}
            alt="image-content"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 175,
              maxHeight: 175,
              objectFit: "cover",
            }}
            className={`rounded-t-3xl ${fade ? "opacity-0" : "opacity-100"} ${
              data?.package_items?.length && data?.package_items?.length > 1
                ? "transition-opacity duration-500"
                : ""
            } `}
          />
        </Link>
      )}

      <div className={`px-2 pt-2 md:px-4 ${cheapestPrice ? "pb-4" : "pb-2"}`}>
        {withSub && "tete"}

        <div className="flex flex-col md:flex-row md:gap-2 align-middle justify-between">
          <div className={`${cheapestPrice ? "" : "min-w-full"}`}>
            <h4
              className={`text-center text-sm md:text-xl ${
                cheapestPrice ? "md:text-left" : "md:text-center"
              }`}
            >
              {data.title}
            </h4>
            {cheapestPrice && (
              <h4 className="text-center md:text-left text-success">
                {formatCurrency(cheapestPrice)}
                <span className="text-secondary text-sm font-normal">
                  /
                  {isCar
                    ? t("common.car").toLocaleLowerCase()
                    : t("common.pax").toLocaleLowerCase()}
                </span>
              </h4>
            )}
          </div>

          {cheapestPrice && (
            <Link
              href={
                to
                  ? `/${locale}/${to}${useId && data?.id ? `/${data.id}` : ""}`
                  : (data?.key && locale + data?.key) ||
                    `/${locale}/details/${
                      (data as TourPackagesProps)?.slug || data?.id
                    }`
              }
              className="mx-auto my-auto md:mr-0 md:ml-auto"
            >
              <Button
                variant="primary"
                icon={<MagnifyingGlassIcon className="w-5 h-5 my-auto" />}
              >
                {!btnText ? t("common.detail") : btnText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
