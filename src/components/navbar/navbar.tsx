"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navData } from "./utils";
import { Hamburger } from "@/modules";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCollapse = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className="flex align-middle justify-between">
        {/* Logo */}
        <div className="w-16 md:w-24">
          <Link href={"/"}>
            <Image src={Images.Logo} alt="logo" sizes="100%" />
          </Link>
        </div>

        {/* Route */}
        <ul className="hidden md:flex align-middle justify-around gap-4 md:gap-8 list-none">
          {navData.map((obj, idx) => (
            <li key={idx} className="text-center flex align-middle text-white">
              <Link href={obj.link} className="my-auto">
                {obj.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden my-auto">
          <Hamburger toggleMenu={handleCollapse} />
        </div>
      </nav>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          {navData.map((val, index) => (
            <li key={index} className="border-b border-gray-400 my-8 uppercase">
              <a href={val.link}>{val.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
};

export default Navbar;
