"use client";
import React from "react";
import { CardItem } from "../card-item";
import { useRequest } from "@/utils";

const TopTrip = () => {
  const params = {
    page: 1,
    pageSize: 3,
    sortedBy: "sort=sequence",
  };
  const { data } = useRequest("top-trips", { ...params });

  return (
    <>
      <div className="relative z-10 mt-44 flex flex-wrap gap-4 justify-center">
        {data &&
          data?.length > 0 &&
          data.map((obj: any, idx) => <CardItem data={obj} key={idx} />)}
      </div>
    </>
  );
};

export default TopTrip;
