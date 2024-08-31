import React, { ButtonHTMLAttributes } from "react";
import { BTN_SIZE, BUTTON_TYPE, TButton, TButtonSize } from "./utils";
import classNames from "classnames";

interface ButtonProps
  extends React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: TButton;
  size?: TButtonSize;
  icon?: React.ReactNode;
  square?: boolean;
  disabled?: boolean;
  iconPosition?: "left" | "right";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  square,
  children,
  className,
  iconPosition = "left",
  icon,
  size,
  variant,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "text-white",
        variant && !disabled ? BUTTON_TYPE[variant]?.bg : "bg-neutral-600",
        size ? BTN_SIZE[size] : "py-1 px-4",
        !square ? "rounded-2xl" : "rounded-sm",
        icon ? "flex justify-center align-middle gap-1" : "",
        className ? className : ""
      )}
      disabled={disabled}
      {...rest}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
