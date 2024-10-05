"use client";
import { Button, SectionWrapper } from "@/modules";
import { CategoryProps, useRequest } from "@/utils";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Nusped = () => {
  const params = useParams();
  const { locale } = params;
  const t = useTranslations();
  const paramsFetch = {
    param: "filters[key][$eq]=package/nusa-penida",
  };
  const { data: nusped } = useRequest<CategoryProps[]>("categories", {
    ...paramsFetch,
  });
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
            <h2 className="mb-8">{t("home.nusped.title")}</h2>
            <p className="text-xl font-light mb-8">
              {t("home.nusped.description")}
            </p>

            <Link
              href={`/${locale}/package/${
                nusped && nusped?.length > 0 && nusped[0]?.id
                  ? String(nusped[0].id)
                  : ""
              }`}
            >
              <Button
                icon={<ArrowRightCircleIcon className="w-4 h-4 my-auto" />}
              >
                {t("common.more")}
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Nusped;
