"use client";

import { Button, Card } from "@/modules";
import { formatCurrency, TourPackagesProps } from "@/utils";
import Image from "next/image";
import React from "react";
import { ICardItem } from "./utils";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface CardItemProps {
  withSub?: boolean;
  data: ICardItem | TourPackagesProps;
  to?: string;
  useId?: boolean;
  onClick?: () => void;
}

const CardItem = ({ data, withSub, to, useId, onClick }: CardItemProps) => {
  const router = useRouter();

  const handleClickButton = () => {};
  return (
    <Card bodyClass={`flex flex-col ${data?.price ? "justify-between" : ''}`}>
      <h4 className="text-center">{data.title}</h4>
      {data?.pict && (
        <div
          className="w-full my-4"
          onClick={onClick}
          style={{ cursor: onClick && "pointer" }}
        >
          <Image
            src={data.pict}
            alt="image-content"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl"
          />
        </div>
      )}

      {withSub && "tete"}

      {data?.price && (
        <div className="flex flex-col md:flex-row gap-4 align-middle justify-between mt-4">
          <h4 className="text-center md:text-left">
            {formatCurrency(data.price)}
            <span className="text-secondary text-sm font-normal">/pax</span>
          </h4>

          <Link
            href={
              to
                ? `/${to}${useId && data?.id ? `/${data.id}` : ""}`
                : data?.key || ""
            }
            className="flex justify-center"
          >
            <Button
              variant="primary"
              onClick={handleClickButton}
              icon={<MagnifyingGlassIcon className="w-5 h-5 my-auto" />}
            >
              Detail
            </Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default CardItem;
