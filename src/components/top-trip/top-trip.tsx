"use client";
import React from "react";
import { CardItem } from "../card-item";
import { TourPackagesProps, useRequest } from "@/utils";
import { useParams } from "next/navigation";

const TopTrip = () => {
  const params = useParams();
  let { locale } = params;
  if (Array.isArray(locale)) {
    locale = locale[0];
  }

  const paramsFetch = {
    page: 1,
    pageSize: 4,
    param:
      "filters[featured]=true&populate[0]=package_items&populate[1]=package_items.image&populate[2]=categories",
  };
  const { data, loading } = useRequest<TourPackagesProps[]>(
    "tour-packages",
    {
      ...paramsFetch,
    },
    locale
  );
  const mockArr = new Array(4).fill(null);
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
