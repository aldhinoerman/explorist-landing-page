import { Button, Card } from "@/modules";
import { capitalizeFirstLetter, formatCurrency } from "@/utils";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { ICardItem } from "./utils";

interface CardItemProps {
  withSub?: boolean;
  data: ICardItem;
}

const CardItem = ({ data, withSub }: CardItemProps) => {
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
        <div className="flex align-middle gap-2 justify-between">
          <div
            className={`${
              data.type === "success" ? "bg-success" : "bg-danger"
            } bg-opacity-20 px-2 py-1 rounded-2xl`}
          >
            <p
              className={`${
                data.type === "success" ? "text-success" : "text-danger"
              } my-auto`}
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

      <div className="flex align-middle justify-between mt-4">
        <h4>
          {formatCurrency(data.price)}
          <span className="text-secondary text-sm font-normal">/pax</span>
        </h4>

        <Button type="primary">Book Now</Button>
      </div>
    </Card>
  );
};

export default CardItem;
