"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar";
import { navData } from "../navbar/utils";

interface HeaderProps {
  isParent?: boolean;
  isParentNav?: boolean;
}

const StickyHeader: React.FC<HeaderProps> = ({ isParent, isParentNav }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCollapse = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <>
      <header
        className={
          !isParent
            ? "sticky top-0 bg-white shadow-xl z-10 px-2 md:px-6 md:py-1 rounded-b-3xl"
            : `fixed top-0 left-0 w-full bg-white shadow-xl px-2 md:px-6 md:py-1 rounded-b-3xl z-50 transition-transform duration-300 ease-in-out ${
                isSticky ? "translate-y-0" : "-translate-y-full"
              }`
        }
      >
        <Navbar
          isParent={isParentNav}
          smallImg
          onNavCollapse={handleCollapse}
        />
      </header>

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
        <ul className="flex flex-col items-center list-none justify-between min-h-[250px]">
          {navData.map((val, index) => (
            <li key={index} className="border-b border-gray-400 my-8 uppercase">
              <a href={`/${val.link}`} onClick={handleCollapse}>
                {val.title}
              </a>
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
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        background: white;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
};

export default StickyHeader;
