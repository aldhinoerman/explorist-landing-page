"use client";

import { Images } from "@/assets";
import { CardItem, Destinations, Hero } from "@/components";
import { itemPackages } from "@/data";
import { Button } from "@/modules";
import Image from "next/image";
import React, { useState } from "react";

const Activity = () => {
  const [limit, setLimit] = useState(6);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  const filteredItems =
    itemPackages.filter((x) => x.packages.includes("activity")) ?? [];

  const limitedItems = filteredItems.slice(0, limit);

  return (
    <>
      <div className="absolute z-0 top-0 left-0 w-full h-full max-h-[425px] md:max-h-[675px]">
        <div className="relative h-full">
          <Image
            src={Images.Rafting}
            fill
            style={{ objectFit: "cover", filter: "brightness(75%)" }}
            priority
            alt="Mountain Background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center min-h-[275px]">
        <Hero title="Activity" description="Thrilling experiences await." />
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-40 md:mt-52">
        {limitedItems?.length > 0 &&
          limitedItems.map((obj, idx) => (
            <CardItem
              data={{ ...obj, link: `/details/${obj.key}` }}
              key={idx}
            />
          ))}
      </div>

      <div className="text-center">
        <Button
          variant="primary"
          size="large"
          onClick={loadMore}
          className="my-12"
          disabled={
            filteredItems?.length === limit || filteredItems?.length < limit
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
