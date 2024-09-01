import { Button, Card } from "@/modules";
import React from "react";
import { topTrips } from "./utils";
import { CardItem } from "../card-item";

const TopTrip = () => {
  return (
    <>
      <div className="relative z-10 mt-44 flex flex-wrap gap-4 justify-center">
        {topTrips.map((obj, idx) => (
          <CardItem data={obj} key={idx} />
        ))}
      </div>
    </>
  );
};

export default TopTrip;
