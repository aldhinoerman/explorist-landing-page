"use client";
import React from "react";
import { CardItem } from "../card-item";
import { TourPackagesProps, useRequest } from "@/utils";

const TopTrip = () => {
  const params = {
    page: 1,
    pageSize: 3,
    param: "sort=sequence",
  };
  const { data, loading } = useRequest<TourPackagesProps[]>("top-trips", {
    ...params,
  });
  const mockArr = new Array(3).fill(null);
  
  return (
    <>
      <div className="relative z-10 mt-44 flex flex-wrap gap-4 justify-center">
        {data && data?.length > 0 && !loading
          ? data.map((obj: any, idx) => <CardItem data={obj} key={idx} />)
          : mockArr.map((_, index) => (
              <div className="skeleton h-32 w-32" key={index}></div>
            ))}
      </div>
    </>
  );
};

export default TopTrip;
