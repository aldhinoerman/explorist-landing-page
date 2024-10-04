"use client";

import { useState } from "react";
import { Navbar } from "../navbar";
import { navData } from "../navbar/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

interface HeaderProps {
  isParent?: boolean;
}

const Header = ({ isParent }: HeaderProps) => {
  const params = useParams();
  const { locale } = params;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleCollapse = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className="relative z-10 p-2 md:p-8">
        <Navbar isParent={isParent} onNavCollapse={handleCollapse} />
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
              <Link
                href={
                  !isParent ? `/${locale}/${val.link}` : `${locale}/${val.link}`
                }
                onClick={handleCollapse}
              >
                {val.title}
              </Link>
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

export default Header;
