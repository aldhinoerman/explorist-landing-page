"use client";

import { Images } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { Hero } from "../hero";
import { itemPackages } from "@/data";
import { CardItem } from "../card-item";
import { Button } from "@/modules";
import { Nusped } from "../nusped";
import { Destinations } from "../destinations";

interface PackageComponentProps {
  slug: string;
}

const PackageComponent: React.FC<PackageComponentProps> = ({ slug }) => {
  const [limit, setLimit] = useState(6);

  const loadMore = () => {
    setLimit((prevState) => prevState + 3);
  };

  const filteredItems =
    itemPackages.filter((x) => x.packages.includes(slug)) ?? [];

  const limitedItems = filteredItems.slice(0, limit);

  return (
    <>
      <div className="absolute z-0 top-0 left-0 w-full h-full max-h-[425px] md:max-h-[675px]">
        <div className="relative h-full">
          <Image
            src={Images.Mountain}
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
          title="Package"
          description="Discover a range of thoughtfully crafted packages that cater to every type of traveler, from adrenaline seekers to those looking for a serene escape."
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-72">
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

      {slug !== "nusa-penida" && <Nusped />}
      <Destinations />
    </>
  );
};

export default PackageComponent;
