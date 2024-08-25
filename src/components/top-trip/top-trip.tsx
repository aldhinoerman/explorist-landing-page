import { Button, Card } from "@/modules";
import React from "react";
import { topTrips } from "./utils";
import Image from "next/image";
import { capitalizeFirstLetter, formatCurrency } from "@/utils";
import moment from "moment";
import { CardItem } from "../card-item";

const TopTrip = () => {
  return (
    <>
      <div className="mt-20 flex flex-wrap gap-4 justify-center">
        {topTrips.map((obj, idx) => (
          <CardItem data={obj} key={idx} withSub />
        ))}
      </div>
    </>
  );
};

export default TopTrip;
