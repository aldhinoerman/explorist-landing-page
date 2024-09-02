"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navData } from "./utils";
import { Hamburger } from "@/modules";

interface NavbarProps {
  isParent?: boolean;
  smallImg?: boolean;
  onNavCollapse: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isParent,
  smallImg,
  onNavCollapse,
}) => {
  return (
    <>
      <nav className="flex align-middle justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className={`w-16 ${!smallImg && "md:w-44"}`}>
          <Link href={"/"}>
            <Image src={Images.Logo} alt="logo" sizes="100%" />
          </Link>
        </div>

        {/* Route */}
        <ul className="hidden md:flex align-middle justify-around gap-4 md:gap-8 list-none">
          {navData.map((obj, idx) => (
            <li
              key={idx}
              className={`text-center flex align-middle ${
                !smallImg && "text-white"
              }`}
            >
              <Link
                href={!isParent ? `/${obj.link}` : obj.link}
                className="my-auto"
              >
                {obj.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden my-auto">
          <Hamburger smallImg={smallImg} toggleMenu={onNavCollapse} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
