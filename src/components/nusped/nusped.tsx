"use client";
import { Button, SectionWrapper } from "@/modules";
import { CategoryProps, useRequest } from "@/utils";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nusped = () => {
  const params = {
    param: "filters[key][$eq]=package/nusa-penida",
  };
  const { data: nusped } = useRequest<CategoryProps[]>("categories", { ...params });
  return (
    <>
      <SectionWrapper id="nusped">
        <h2 className="text-center">Nusa Penida</h2>

        <div className="flex flex-wrap align-middle justify-center gap-4 mt-16">
          <div className="w-full md:min-w-[350px] max-w-[500px]">
            <Image
              src="https://friendlybalitour.com/wp-content/uploads/2023/10/1698684178334.jpg"
              alt="nusped-pict"
              width={475}
              height={350}
              className="rounded-3xl"
            />
          </div>
          <div className="w-full md:min-w-[350px] max-w-[675px] my-auto">
            <h2 className="mb-8">NUSA PENIDA ISLAND GUIDE</h2>
            <p className="text-xl font-light mb-8">
              The beautiful, exotic Nusa Penida island lies just 25 kilometers
              from Bali, the most famous tourist destination in Indonesia.
            </p>

            <Link
              href={`/package/${
                nusped && nusped?.length > 0 && nusped[0]?.id ? String(nusped[0].id) : ""
              }`}
            >
              <Button
                icon={<ArrowRightCircleIcon className="w-4 h-4 my-auto" />}
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Nusped;
