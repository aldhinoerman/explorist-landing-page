"use client";

import { Images } from "@/assets";
import { CardItem, Destinations, Hero, NotFound } from "@/components";
import { Button, Loading } from "@/modules";
import { useRequest } from "@/utils";
import Image from "next/image";
import React from "react";

const Activity: React.FC = () => {
  const initialParams = {
    page: 1,
    limit: 6,
    param: "filters[category][key][$contains]=activity",
  };

  const { data: activity } = useRequest("categories", {
    param: "filters[key][$eq]=activity",
  });

  const {
    data: activities,
    loading,
    handleSetPagination,
    pagination,
  } = useRequest("tour-packages", { ...initialParams });

  const loadMore = () => {
    handleSetPagination(
      1,
      pagination?.pageSize ? pagination?.pageSize + 3 : 6 + 3
    );
  };

  return (
    <>
      <div className="absolute z-0 top-0 left-0 w-full h-full max-h-[425px] md:max-h-[675px]">
        <div className="relative h-full">
          <Image
            src={activity[0]?.pict ?? Images.Rafting}
            fill
            style={{ objectFit: "cover", filter: "brightness(75%)" }}
            priority
            alt="Mountain Background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center min-h-[275px]">
        <Hero
          title={activity[0]?.title}
          description={activity[0]?.description}
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-40 md:mt-52">
        {loading ? (
          <Loading />
        ) : activities?.length > 0 ? (
          activities.map((obj, idx) => (
            <CardItem data={obj} key={idx} to="details" useId />
          ))
        ) : (
          <NotFound />
        )}
      </div>

      <div className="text-center">
        <Button
          variant="primary"
          size="large"
          onClick={loadMore}
          className="my-12"
          disabled={
            activities?.length === pagination?.pageSize ||
            (pagination && pagination.pageSize)
              ? activities?.length < pagination?.pageSize
              : activities?.length < 6
          }
        >
          Load More
        </Button>
      </div>

      <Destinations />
    </>
  );
};

export default Activity;
