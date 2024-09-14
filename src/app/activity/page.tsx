"use client";

import { Images } from "@/assets";
import { CardItem, Destinations, Hero, NotFound } from "@/components";
import { Button, Loading } from "@/modules";
import { useRequest } from "@/utils";
import Image from "next/image";
import React from "react";

// Define the type for the activity data
interface ActivityData {
  pict: string;
  title: string;
  description: string;
}

const Activity: React.FC = () => {
  const initialParams = {
    page: 1,
    pageSize: 6,
    param: "filters[categories][key][$contains]=activity&sort=sequence&populate=*",
  };

  // Define the correct type for `activity`
  const { data: activity } = useRequest<ActivityData[]>("categories", {
    param: "filters[key][$eq]=activity",
  });

  const {
    data: activities,
    loading,
    handleSetPagination,
    pagination,
  } = useRequest<ActivityData[]>("tour-packages", { ...initialParams });

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
            src={activity?.[0]?.pict ?? Images.Rafting} // Safely access `pict`
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
          title={activity?.[0]?.title ?? ""} // Safely access `title`
          description={activity?.[0]?.description ?? ""} // Safely access `description`
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-40 md:mt-52">
        {activities &&
          activities?.length > 0 &&
          activities.map((obj, idx) => (
            <CardItem data={obj} key={idx} to="details" useId />
          ))}
      </div>

      <div className="text-center">
        {loading ? (
          <Loading />
        ) : activities && activities?.length > 0 ? (
          <Button
            variant="primary"
            size="large"
            onClick={loadMore}
            className="my-12"
            disabled={Boolean(
              (activities && activities?.length === pagination?.pageSize) ||
                (activities && pagination && pagination.pageSize)
                ? activities?.length < pagination?.pageSize
                : activities && activities?.length < 6
            )}
          >
            Load More
          </Button>
        ) : (
          <NotFound />
        )}
      </div>

      <Destinations />
    </>
  );
};

export default Activity;
