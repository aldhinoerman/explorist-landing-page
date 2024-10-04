"use client";

import { Button, Card } from "@/modules";
import { formatCurrency, TourPackagesProps } from "@/utils";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { ICardItem } from "./utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useParams } from "next/navigation";

interface CardItemProps {
  withSub?: boolean;
  data: ICardItem | TourPackagesProps;
  to?: string;
  useId?: boolean;
  mobileWidth?: number;
  btnText?: string;
  width?: number;
  isCar?: boolean;
}

const CardItem = ({
  data,
  withSub,
  to,
  mobileWidth,
  btnText,
  width,
  useId,
  isCar,
}: CardItemProps) => {
  const params = useParams();
  const { locale } = params;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const getRandomIndex = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomPict = useCallback(() => {
    if (data?.package_items?.data && data?.package_items?.data?.length > 1) {
      const interval = setInterval(() => {
        setFade(true);

        setTimeout(() => {
          const packageItems = data?.package_items?.data ?? [];

          if (packageItems.length > 0) {
            setCurrentImageIndex(getRandomIndex(packageItems.length));
          }

          setFade(false);
        }, 500);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [data?.package_items?.data]);

  useEffect(() => {
    getRandomPict();
  }, [getRandomPict]);

  return (
    <Card
      bodyClass={`flex flex-col ${data?.price ? "justify-between" : ""}`}
      width={width}
      mobileWidth={mobileWidth}
    >
      {data?.pict && (
        <Link
          href={
            to
              ? `/${locale}/${to}${useId && data?.id ? `/${data.id}` : ""}`
              : (data?.key && locale + data?.key) || ""
          }
          className="w-full"
        >
          <Image
            src={
              !data?.package_items?.data?.length
                ? data.pict
                : String(
                    data?.package_items?.data[currentImageIndex]?.attributes
                      ?.pict
                  )
            }
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
              data?.package_items?.data?.length
                ? "transition-opacity duration-500"
                : ""
            } `}
          />
        </Link>
      )}

      <div className={`px-2 pt-2 md:px-4 ${data?.price ? "pb-4" : "pb-2"}`}>
        {withSub && "tete"}

        <div className="flex flex-col md:flex-row md:gap-2 align-middle justify-between">
          <div className={`${data?.price ? "" : "min-w-full"}`}>
            <h4
              className={`text-center text-sm md:text-xl ${
                data?.price ? "md:text-left" : "md:text-center"
              }`}
            >
              {data.title}
            </h4>
            {data?.price && (
              <h4 className="text-center md:text-left text-success">
                {formatCurrency(data?.price)}
                <span className="text-secondary text-sm font-normal">
                  /{isCar ? "car" : "pax"}
                </span>
              </h4>
            )}
          </div>

          {data?.price && (
            <Link
              href={
                to
                  ? `/${locale}/${to}${useId && data?.id ? `/${data.id}` : ""}`
                  : (data?.key && locale + data?.key) || ""
              }
              className="mx-auto my-auto md:mr-0 md:ml-auto"
            >
              <Button
                variant="primary"
                icon={<MagnifyingGlassIcon className="w-5 h-5 my-auto" />}
              >
                {!btnText ? "Detail" : btnText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
