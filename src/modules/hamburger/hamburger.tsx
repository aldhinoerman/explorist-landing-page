import { Bars4Icon } from "@heroicons/react/24/solid";
import React from "react";

interface HamburgerProps {
  toggleMenu: () => void;
}

const Hamburger = ({ toggleMenu }: HamburgerProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="z-100 text-white p-3"
      style={{ width: "35px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="2 1 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
