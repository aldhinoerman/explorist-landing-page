"use client";

import { Button, SocialLink } from "@/modules";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface InputFormProps {
  email: string;
}

const Footer = () => {
  const { register, handleSubmit } = useForm<InputFormProps>();

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
            <h4 className="mb-4">Stay Connected</h4>
            <p className="font-light mt-2">
              Address: Denpasar, Bali, Indonesia
            </p>
            <p className="font-light mt-2">Phone: (+62) 82 145 500 117</p>
            <p className="font-light mt-2">E-Mail: exploristbali@gmail.com</p>
          </div>
          <div className="mt-4">
            <h4 className="mb-4">
              Follow us on social media to win tour giveaway for two
            </h4>
            <SocialLink />
          </div>
        </div>
        <div className="w-full max-w-[300px]">
          <h4 className="mb-4">Explorist</h4>
          <Link href={"#package"}>
            <p className="font-light">Destinations</p>
          </Link>
        </div>
        <div className="w-full max-w-[300px]">
          <h4>Newsletter</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="input input-bordered input-primary w-full !outline-none mt-4"
              {...register("email")}
            />

            <Button
              variant="primary"
              size="large"
              type="submit"
              className="!w-full my-4"
            >
              Get the Hottest offers
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
