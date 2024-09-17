"use client";
import { Icon } from "@/modules";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

const socials = [
  {
    icon: <PhoneIcon />,
    bg: "bg-phone",
    link: "tel:+6282145500117",
  },
  {
    icon: <Icon type="whatsapp" />,
    bg: "bg-whatsapp",
    link: "https://wa.me/6282145500117",
  },
  {
    icon: <EnvelopeIcon />,
    bg: "bg-danger",
    link: "mailto:exploristbali@gmail.com",
  },
  {
    icon: <Icon type="instagram" />,
    bg: "bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#962fbf]",
    link: "https://instagram.com/exploristtourbali",
  },
  {
    icon: <Icon type="mesenger" />,
    bg: "bg-mesenger",
    link: "https://m.me/418237498033254",
  },
];

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="fixed bottom-0 z-30 right-0">
      {isOpen ? (
        <div className="m-2 md:m-10 flex flex-col gap-6">
          {socials.map((obj, idx) => (
            <Link
              href={obj.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={handleOpen}
                onBlur={handleOpen}
                className={`${obj.bg} text-white w-14 h-14 p-2 rounded-full`}
              >
                {obj.icon}
              </button>
            </Link>
          ))}
          <button
            onClick={handleOpen}
            onBlur={handleOpen}
            className="bg-primary text-white w-14 h-14 p-2 rounded-full"
          >
            <XMarkIcon />
          </button>
        </div>
      ) : (
        <div className="m-2 md:m-10">
          <button
            onClick={handleOpen}
            className="bg-primary text-white w-14 h-14 p-2 rounded-full"
          >
            <EnvelopeIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
