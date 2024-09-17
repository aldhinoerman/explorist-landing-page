"use client";

import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Hero } from "../hero";
import { CardItem } from "../card-item";
import { Loading } from "@/modules";
import { Nusped } from "../nusped";
import { Destinations } from "../destinations";
import { CategoryProps, TourPackagesProps, useRequest } from "@/utils";
import { NotFound } from "../error";

interface PackageComponentProps {
  slug: string;
}

const PackageComponent: React.FC<PackageComponentProps> = ({ slug }) => {
  const initialParams = {
    param: `filters[categories][id][$contains]=${slug}&sort=sequence&populate=*`,
  };

  const { data: category } = useRequest<CategoryProps>(`categories/${slug}`);

  const {
    data: packages,
    loading,
    pagination,
  } = useRequest<TourPackagesProps[]>("tour-packages", { ...initialParams });

  return (
    <>
      <div className="absolute z-0 top-0 left-0 w-full h-full max-h-[425px] md:max-h-[675px]">
        <div className="relative h-full">
          <Image
            src={category?.pict ?? Images.Mountain}
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
          title={category?.title ?? "Package"}
          description={
            category?.description ??
            "Discover a range of thoughtfully crafted packages that cater to every type of traveler, from adrenaline seekers to those looking for a serene escape."
          }
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-40 md:mt-52">
        {packages &&
          packages?.length > 0 &&
          packages.map((obj, idx) => (
            <CardItem data={obj} key={idx} to="details" useId />
          ))}
      </div>

      <div className="text-center">
        {loading ? <Loading /> : packages?.length === 0 && <NotFound />}
      </div>

      {category && category?.key !== "package/nusa-penida" && <Nusped />}
      <Destinations />
    </>
  );
};

export default PackageComponent;
