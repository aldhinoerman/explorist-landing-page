import React from "react";
import { BTN_SIZE, BUTTON_TYPE, TButton, TButtonSize } from "./utils";

interface ButtonProps extends React.PropsWithChildren {
  type?: TButton;
  size?: TButtonSize;
}

const Button = ({ children, size, type }: ButtonProps) => {
  return (
    <button
      className={`${type ? BUTTON_TYPE[type]?.bg : "bg-secondary"} text-white ${
        size ? BTN_SIZE[size] : "py-1 px-4"
      } rounded-2xl`}
    >
      {children}
    </button>
  );
};

export default Button;
