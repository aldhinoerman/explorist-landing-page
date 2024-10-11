"use client";

import { Button, SocialLink } from "@/modules";
import moment from "moment";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface InputFormProps {
  email: string;
}

const Footer = () => {
  const { register, handleSubmit } = useForm<InputFormProps>();
  const t = useTranslations();

  const onSubmit: SubmitHandler<InputFormProps> = (data) => {
    const subject = encodeURIComponent("Tours Information");
    const body = encodeURIComponent(`From: ${data.email}`);
    const mailtoLink = `mailto:exploristbali@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-whiteblue" id="contact">
      <div className="max-w-[1440px] mx-auto p-4 md:p-12 flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="w-full">
          <div>
            <h4 className="mb-4">{t("footer.title")}</h4>
            <p className="font-light mt-2">{t("footer.contact.address")}</p>
            <p className="font-light mt-2">{t("footer.contact.phone")}</p>
            <p className="font-light mt-2">{t("footer.contact.email")}</p>
          </div>
          <div className="mt-4">
            <h4 className="mb-4">{t("footer.cta")}</h4>
            <SocialLink />
          </div>
        </div>
        <div className="w-full max-w-[300px]">
          <h4 className="mb-4">Explorist</h4>
          <Link href={"#package"}>
            <p className="font-light">{t("common.destinations")}</p>
          </Link>
        </div>
        <div className="w-full md:max-w-[300px]">
          <h4>{t("footer.newsletter")}</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder={t("form.placeholder.input")}
              className="input input-bordered input-primary w-full !outline-none mt-4"
              {...register("email")}
            />

            <Button
              variant="primary"
              size="large"
              type="submit"
              className="!w-full my-4"
            >
              {t("form.button.offers")}
            </Button>
          </form>
        </div>
      </div>
      <div className="text-center py-10">
        <span>{moment().format("YYYY")} © Explorist Tour Bali</span>
      </div>
    </footer>
  );
};

export default Footer;
