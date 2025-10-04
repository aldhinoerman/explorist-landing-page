"use client";
import {
  Button,
  Icon,
  Loading,
  Modal,
  TabContent,
  TabItem,
  Tabs,
} from "@/modules";
import {
  capitalizeFirstLetter,
  onSubmitEmail,
  onSubmitWhatsApp,
  renderImage,
  TourPackagesProps,
  useRequest,
} from "@/utils";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { NotFound } from "../error";
import { useForm } from "react-hook-form";
import { Destinations } from "../destinations";
import { Testimoni } from "../testimoni";
import { useTranslations } from "next-intl";

interface BookDetailProps {
  slug: string;
  locale: string;
}

const BookDetail: React.FC<BookDetailProps> = ({ slug, locale }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<any>();

  const initialParams = {
    param: "populate=*",
  };
  const { data: pack, loading } = useRequest<TourPackagesProps>(
    `tour-packages/${slug}`,
    {
      ...initialParams,
    },
    locale
  );
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("activities");
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleShowModal = () => {
    setModalShow((prevState) => !prevState);
  };

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const contents = useCallback(() => {
    const tabs = [];

    if (pack && pack?.categories?.find((x) => x?.key === "car")) {
      tabs.push(
        {
          value: "pricing",
          txt: t("book-detail.pricelist"),
          content:
            (pack?.pricings as any)?.data &&
            (pack?.pricings as any)?.data?.length > 0
              ? {
                  pricing: (pack.pricings as any).data.map((val: any) => ({
                    id: val.id,
                    ...val,
                  })),
                  price_inclusions:
                    pack?.price_inclusions?.data &&
                    pack.price_inclusions.data.map((valInc: any) => ({
                      id: valInc.id,
                      ...valInc,
                    })),
                  price_exclusions:
                    pack?.price_exclusions?.data &&
                    pack.price_exclusions.data.map((valExc: any) => ({
                      id: valExc.id,
                      ...valExc,
                    })),
                  regular_inclusions:
                    pack?.regular_inclusions?.data &&
                    pack.regular_inclusions.data.map((valReg: any) => ({
                      id: valReg.id,
                      ...valReg,
                    })),
                  regular_exclusions:
                    pack?.regular_exclusions?.data &&
                    pack.regular_exclusions.data.map((valRegEx: any) => ({
                      id: valRegEx.id,
                      ...valRegEx,
                    })),
                }
              : [],
        },
        {
          value: "terms",
          txt: "T & C",
          content:
            pack?.terms_conditions?.data &&
            pack?.terms_conditions?.data?.length > 0
              ? pack.terms_conditions.data.map((val: any) => ({
                  id: val.id,
                  ...val,
                }))
              : [],
        }
      );
    } else {
      tabs.push(
        {
          value: "activities",
          txt: t("book-detail.activities"),
          content:
            pack?.package_items && pack?.package_items?.length > 0
              ? pack.package_items.map((val: any) => ({
                  id: val.id,
                  ...val,
                }))
              : [],
        },
        {
          value: "itinerary",
          txt: t("book-detail.itinerary"),
          content:
            pack?.itineraries?.data && pack?.itineraries?.data?.length > 0
              ? pack.itineraries.data.map((val: any) => ({
                  id: val.id,
                  ...val,
                }))
              : [],
        },
        {
          value: "pricing",
          txt: t("book-detail.pricelist"),
          content:
            (pack?.pricings as any)?.data &&
            (pack?.pricings as any)?.data?.length > 0
              ? {
                  pricing: (pack?.pricings as any).data.map((val: any) => ({
                    id: val.id,
                    ...val,
                  })),
                  price_inclusions:
                    pack?.price_inclusions?.data &&
                    pack.price_inclusions.data.map((valInc: any) => ({
                      id: valInc.id,
                      ...valInc,
                    })),
                  price_exclusions:
                    pack?.price_exclusions?.data &&
                    pack.price_exclusions.data.map((valExc: any) => ({
                      id: valExc.id,
                      ...valExc,
                    })),
                  regular_inclusions:
                    pack?.regular_inclusions?.data &&
                    pack.regular_inclusions.data.map((valReg: any) => ({
                      id: valReg.id,
                      ...valReg,
                    })),
                  regular_exclusions:
                    pack?.regular_exclusions?.data &&
                    pack.regular_exclusions.data.map((valRegEx: any) => ({
                      id: valRegEx.id,
                      ...valRegEx,
                    })),
                }
              : [],
        },
        {
          value: "terms",
          txt: "T & C",
          content:
            pack?.terms_conditions?.data &&
            pack?.terms_conditions?.data?.length > 0
              ? pack.terms_conditions.data.map((val: any) => ({
                  id: val.id,
                  ...val,
                }))
              : [],
        }
      );
    }

    return tabs;
  }, [pack, t]);

  useEffect(() => {
    if (pack && pack?.title) {
      document.title = `Explorist Tour Bali - Book - ${pack.title}`;
    }

    if (pack && pack?.categories?.find((x) => x?.key === "car")) {
      setActiveTab("pricing");
    }
  }, [pack]);

  return (
    <>
      {pack ? (
        <>
          <div className="flex flex-col md:flex-row gap-12 justify-center align-middle my-12 md:my-20">
            <div>
              <div className="w-full">
                <Image
                  src={pack?.image?.url ? renderImage(pack.image.url) : ""}
                  alt="detail-pict"
                  width={575}
                  height={375}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-primary">{pack.title}</h3>
              <h4 className="font-light text-secondary mb-4">
                {pack.location}
              </h4>
              <Button variant="primary" size="large" onClick={handleShowModal}>
                {t("common.book-now")}
              </Button>
            </div>
          </div>

          <div className="max-w-screen-sm">
            <Tabs>
              {contents().map((obj, idx) => (
                <React.Fragment key={idx}>
                  <TabItem
                    title={obj.txt}
                    isActive={Boolean(obj.value === activeTab)}
                    onClick={() => handleChangeTab(obj.value)}
                  />
                </React.Fragment>
              ))}
            </Tabs>
          </div>
          <div>
            {contents().map((val, index) => (
              <TabContent
                isActive={Boolean(val.value === activeTab)}
                type={val.value}
                data={val.content}
                key={index}
              />
            ))}
          </div>

          <div className="text-center my-12">
            <Button variant="primary" size="large" onClick={handleShowModal}>
              {t("common.book-now")}
            </Button>
          </div>

          {/* <Destinations /> */}
          <Testimoni />
        </>
      ) : loading ? (
        <Loading size="large" />
      ) : (
        <NotFound />
      )}

      <Modal
        isOpen={modalShow}
        title={t("book-detail.online-booking")}
        closeText={t("common.cancel")}
        onClose={handleShowModal}
      >
        <form className="form flex flex-col gap-8">
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            {t("form.label.name")}
            <input
              type="text"
              className="grow text-dark"
              placeholder={t("form.placeholder.input-name")}
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
          </label>
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            {t("form.label.email")}
            <input
              type="email"
              className="grow text-dark"
              placeholder="ex:exploristbali@gmail.com"
              {...register("email")}
            />
          </label>
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            {t("form.label.phone-number")}
            <input
              type="tel"
              className="grow text-dark"
              placeholder="ex:+62812345678"
              {...register("phone")}
            />
          </label>
          <div className="flex flex-wrap gap-8">
            <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
              {t("form.label.adult")}
              <input
                type="number"
                className="grow text-dark"
                placeholder={t("form.placeholder.input-adult")}
                defaultValue={2}
                min={1}
                {...register("adult")}
              />
            </label>
            <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
              {t("form.label.child")}
              <input
                type="number"
                className="grow text-dark"
                placeholder={t("form.placeholder.input-child")}
                defaultValue={0}
                min={0}
                {...register("child")}
              />
            </label>
          </div>
          <div className="form-control max-w-[100px]">
            <label className="label cursor-pointer">
              <span className="text-gray">{t("form.label.inclusion")}</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary"
                {...register("inclusion")}
              />
            </label>
          </div>
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            {t("form.label.select-date")}
            <input
              type="date"
              className="grow text-dark"
              placeholder={t("form.placeholder.select-date")}
              {...register("date", { required: true })}
              aria-invalid={errors.date ? "true" : "false"}
            />
          </label>
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            {t("form.label.pick-up-time")}
            <input
              type="time"
              className="grow text-dark"
              placeholder={t("form.placeholder.select-time")}
              {...register("time", { required: true })}
              aria-invalid={errors.time ? "true" : "false"}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="text-gray">{t("form.label.pick-up-at")}</span>
            </div>
            <select
              className="select select-bordered text-dark !outline-none"
              {...register("pick_up_at")}
            >
              {...["hotel", "airport"].map((obj, idx) => (
                <option value={obj} key={idx} defaultValue={"hotel"}>
                  {capitalizeFirstLetter(obj)}
                </option>
              ))}
            </select>
          </label>
          {watch("pick_up_at") === "airport" ? (
            <>
              <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
                {t("form.label.station")}
                <input
                  type="text"
                  className="grow text-dark"
                  placeholder="eg: International Arrival I Gusti Ngurah Rai Airport"
                  {...register("station")}
                />
              </label>
              <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
                {t("form.label.flight-number")}
                <input
                  type="text"
                  className="grow text-dark"
                  placeholder="eg: GA-222"
                  {...register("flight_number")}
                />
              </label>
            </>
          ) : (
            <>
              <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
                {t("form.label.hotel-name")}
                <input
                  type="text"
                  className="grow text-dark"
                  placeholder={t("form.placeholder.input-hotel-name")}
                  {...register("hotel_name")}
                />
              </label>
              <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
                {t("form.label.hotel-address")}
                <input
                  type="text"
                  className="grow text-dark"
                  placeholder={t("form.placeholder.input-hotel-address")}
                  {...register("hotel_address")}
                />
              </label>
            </>
          )}
          <label className="form-control w-full">
            <div className="label">
              <span className="text-gray">{t("form.label.notes")}</span>
            </div>
            <textarea
              placeholder={t("form.placeholder.input-message")}
              className="input input-bordered border-secondary !outline-none p-2 text-dark min-h-32"
              {...register("notes")}
            />
          </label>

          <div className="flex flex-wrap justify-center align-middle gap-8">
            <Button
              type="submit"
              variant="primary"
              icon={<Icon type="mail" />}
              size="large"
              onClick={handleSubmit((data) => {
                onSubmitEmail(
                  { ...data, package_name: pack?.title },
                  Boolean(
                    pack &&
                      pack?.categories?.find((x) => x?.key === "car")
                  )
                );
                reset();
                handleShowModal();
              })}
            >
              {t("form.button.book-by-email")}
            </Button>
            <Button
              type="submit"
              variant="success"
              icon={<Icon type="whatsapp" className={"size-6"} />}
              size="large"
              onClick={handleSubmit((data) => {
                onSubmitWhatsApp(
                  { ...data, package_name: pack?.title },
                  Boolean(
                    pack &&
                      pack?.categories?.find((x) => x?.key === "car")
                  )
                );
                reset();
                handleShowModal();
              })}
            >
              {t("form.button.book-by-whatsapp")}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BookDetail;
