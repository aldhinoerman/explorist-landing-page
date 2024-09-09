"use client";
import { Button, Loading, SectionWrapper } from "@/modules";
import React from "react";
import { CardItem } from "../card-item";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { TourPackagesProps, useRequest } from "@/utils";
import { NotFound } from "../error";

const Activity = () => {
  const params = {
    page: 1,
    limit: 6,
    param: "filters[category][key][$contains]=activity",
  };
  const { data: activities, loading } = useRequest<TourPackagesProps[]>(
    `tour-packages`,
    {
      ...params,
    }
  );

  return (
    <SectionWrapper id="activity">
      <h2 className="text-center">Best Adventure</h2>

      <div className="mt-20 flex flex-wrap gap-4 justify-center">
        {loading ? (
          <Loading />
        ) : activities && activities?.length > 0 ? (
          activities.map((obj, idx) => (
            <CardItem data={obj} key={idx} to="details" useId />
          ))
        ) : (
          <NotFound />
        )}
      </div>

      <div className="flex justify-center mt-12">
        <Link href={"activity"}>
          <Button
            variant="primary"
            size="large"
            icon={<ChevronRightIcon className="w-4 h-4 my-auto" />}
            iconPosition="right"
          >
            More Activities
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default Activity;
