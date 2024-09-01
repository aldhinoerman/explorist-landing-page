"use client";

import { Images } from "@/assets";
import { CardItem, Destinations, Hero } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import { activities } from "./utils";
import { Button } from "@/modules";

const Activity = () => {
  const [limit, setLimit] = useState(6);

  // Function to increase the limit by 3
  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  // Get the limited items to display
  const limitedItems = activities.slice(0, limit);
  return (
    <>
      <div className="absolute z-0 top-0 left-0 w-full h-full max-h-[425px] md:max-h-[675px]">
        <div className="relative h-full">
          <Image
            src={Images.Rafting}
            fill
            style={{ objectFit: "cover", filter: "brightness(75%)" }}
            // quality={100}
            priority
            alt="Mountain Background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Optional: Overlay */}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center mt-16 min-h-[275px]">
        <Hero
          title="Activities"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
      </div>

      {/* <div className="flex flex-wrap gap-4 justify-center mt-40">
        {limitedItems?.length > 0 &&
          limitedItems.map((obj, idx) => <CardItem data={obj} key={idx} />)}
      </div> */}

      <div className="text-center">
        <Button
          variant="primary"
          size="large"
          onClick={loadMore}
          className="my-12"
          disabled={activities?.length === limit}
        >
          Load More
        </Button>
      </div>

      <Destinations />
    </>
  );
};

export default Activity;
