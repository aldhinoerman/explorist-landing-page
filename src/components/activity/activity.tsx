"use client";
import { Button, Loading, SectionWrapper } from "@/modules";
import React from "react";
import { CardItem } from "../card-item";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { TourPackagesProps, useRequest } from "@/utils";
import { NotFound } from "../error";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const Activity = () => {
  const params = useParams();
  const { locale } = params;
  const t = useTranslations();
  const paramsFetch = {
    page: 1,
    pageSize: 6,
    param:
      "filters[categories][key][$contains]=activity&sort=sequence&populate=*",
  };
  const { data: activities, loading } = useRequest<TourPackagesProps[]>(
    `tour-packages`,
    {
      ...paramsFetch,
    }
  );

  return (
    <SectionWrapper id="activity">
      <h2 className="text-center">{t("home.activity.title")}</h2>

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
        <Link href={`${locale}/activity`}>
          <Button
            variant="primary"
            size="large"
            icon={<ChevronRightIcon className="w-4 h-4 my-auto" />}
            iconPosition="right"
          >
            {t("home.activity.more")}
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default Activity;
