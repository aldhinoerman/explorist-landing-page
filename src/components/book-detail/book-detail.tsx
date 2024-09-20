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
  TourPackagesProps,
  useRequest,
} from "@/utils";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { NotFound } from "../error";
import { useForm } from "react-hook-form";
import { Destinations } from "../destinations";
import { Testimoni } from "../testimoni";

interface BookDetailProps {
  slug: string;
}

const BookDetail: React.FC<BookDetailProps> = ({ slug }) => {
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
    }
  );
  const [activeTab, setActiveTab] = useState("activities");
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleShowModal = () => {
    setModalShow((prevState) => !prevState);
  };

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const contents = useCallback(
    () => [
      {
        value: "activities",
        txt: "Activities",
        content:
          pack?.package_items?.data && pack?.package_items?.data?.length > 0
            ? pack.package_items.data.map((val: any) => ({
                id: val.id,
                ...val.attributes,
              }))
            : [],
      },
      {
        value: "itinerary",
        txt: "Itinerary",
        content:
          pack?.itineraries?.data && pack?.itineraries?.data?.length > 0
            ? pack.itineraries.data.map((val: any) => ({
                id: val.id,
                ...val.attributes,
              }))
            : [],
      },
      {
        value: "pricing",
        txt: "Pricelist",
        content:
          pack?.pricings?.data && pack?.pricings?.data?.length > 0
            ? {
                pricing: pack.pricings.data.map((val: any) => ({
                  id: val.id,
                  ...val.attributes,
                })),
                price_inclusions:
                  pack?.price_inclusions?.data &&
                  pack.price_inclusions.data.map((valInc: any) => ({
                    id: valInc.id,
                    ...valInc.attributes,
                  })),
                price_exclusions:
                  pack?.price_exclusions?.data &&
                  pack.price_exclusions.data.map((valExc: any) => ({
                    id: valExc.id,
                    ...valExc.attributes,
                  })),
                regular_inclusions:
                  pack?.regular_inclusions?.data &&
                  pack.regular_inclusions.data.map((valReg: any) => ({
                    id: valReg.id,
                    ...valReg.attributes,
                  })),
                regular_exclusions:
                  pack?.regular_exclusions?.data &&
                  pack.regular_exclusions.data.map((valRegEx: any) => ({
                    id: valRegEx.id,
                    ...valRegEx.attributes,
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
                ...val.attributes,
              }))
            : [],
      },
    ],
    [pack]
  );

  useEffect(() => {
    if (pack && pack?.title) {
      document.title = `Explorist Tour Bali - Book - ${pack.title}`;
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
                  src={pack?.pict ?? ""}
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
                Book Now
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
              Book Now
            </Button>
          </div>

          <Destinations />
          <Testimoni />
        </>
      ) : loading ? (
        <Loading size="large" />
      ) : (
        <NotFound />
      )}

      <Modal
        isOpen={modalShow}
        title="Online Booking"
        closeText="Cancel"
        onClose={handleShowModal}
      >
        <form className="form flex flex-col gap-8">
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            Name
            <input
              type="text"
              className="grow text-dark"
              placeholder="Please Input Your Name"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
          </label>
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            E-mail
            <input
              type="email"
              className="grow text-dark"
              placeholder="ex:exploristbali@gmail.com"
              {...register("email")}
            />
          </label>
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            Phone Number
            <input
              type="tel"
              className="grow text-dark"
              placeholder="ex:+62812345678"
              {...register("phone")}
            />
          </label>
          <div className="flex flex-wrap gap-8">
            <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
              Adult
              <input
                type="number"
                className="grow text-dark"
                placeholder="Enter total adult"
                defaultValue={2}
                min={1}
                {...register("adult")}
              />
            </label>
            <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
              Child
              <input
                type="number"
                className="grow text-dark"
                placeholder="Enter total child"
                defaultValue={0}
                min={0}
                {...register("child")}
              />
            </label>
          </div>
          <div className="form-control max-w-[100px]">
            <label className="label cursor-pointer">
              <span className="text-gray">Inclusion</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary"
                {...register("inclusion")}
              />
            </label>
          </div>
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            Select Date
            <input
              type="date"
              className="grow text-dark"
              placeholder="Select a date"
              {...register("date", { required: true })}
              aria-invalid={errors.date ? "true" : "false"}
            />
          </label>
          <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
            Pick-Up Time
            <input
              type="time"
              className="grow text-dark"
              placeholder="Select a time"
              {...register("time", { required: true })}
              aria-invalid={errors.time ? "true" : "false"}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="text-gray">Pick-Up At</span>
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
                Station
                <input
                  type="text"
                  className="grow text-dark"
                  placeholder="eg: International Arrival I Gusti Ngurah Rai Airport"
                  {...register("station")}
                />
              </label>
              <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
                Flight Number
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
                Hotel Name
                <input
                  type="text"
                  className="grow text-dark"
                  placeholder="Please input your hotel name"
                  {...register("hotel_name")}
                />
              </label>
              <label className="input input-bordered border-secondary text-gray flex items-center gap-4 !outline-none">
                Hotel Address
                <input
                  type="text"
                  className="grow text-dark"
                  placeholder="Please input your hotel address"
                  {...register("hotel_address")}
                />
              </label>
            </>
          )}
          <label className="form-control w-full">
            <div className="label">
              <span className="text-gray">Notes</span>
            </div>
            <textarea
              placeholder="Enter your message..."
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
                onSubmitEmail({ ...data, package_name: pack?.title });
                reset();
                handleShowModal();
              })}
            >
              Book by E-mail
            </Button>
            <Button
              type="submit"
              variant="success"
              icon={<Icon type="whatsapp" className={"size-6"} />}
              size="large"
              onClick={handleSubmit((data) => {
                onSubmitWhatsApp({ ...data, package_name: pack?.title });
                reset();
                handleShowModal();
              })}
            >
              Book by Whatsapp
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BookDetail;
