"use client";

import { Button, Card } from "@/modules";
import { capitalizeFirstLetter, formatCurrency } from "@/utils";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { ICardItem } from "./utils";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface CardItemProps {
  withSub?: boolean;
  data: ICardItem;
}

const CardItem = ({ data, withSub }: CardItemProps) => {
  const router = useRouter();

  const handleClickButton = () => {};
  return (
    <Card>
      <h4 className="text-center">{data.title}</h4>
      <div className="w-full my-4">
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

      {withSub && (
        <div className="flex flex-col md:flex-row align-middle gap-2 justify-between">
          <div
            className={`${
              data.type === "success" ? "bg-success" : "bg-danger"
            } bg-opacity-20 px-2 py-1 rounded-2xl`}
          >
            <p
              className={`${
                data.type === "success" ? "text-success" : "text-danger"
              } my-auto text-center`}
            >
              {capitalizeFirstLetter(data.category)}
            </p>
          </div>
          <p className="text-secondary">{data.lengthTour}</p>
          <p className="text-secondary">
            {moment(data.date).format("DD.M.YYYY")}
          </p>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 align-middle justify-between mt-4">
        <h4 className="text-center md:text-left">
          {formatCurrency(data.price)}
          <span className="text-secondary text-sm font-normal">/pax</span>
        </h4>

        <Button
          variant="primary"
          onClick={handleClickButton}
          icon={<MagnifyingGlassIcon className="w-5 h-5 my-auto" />}
        >
          Detail
        </Button>
      </div>
    </Card>
  );
};

export default CardItem;
