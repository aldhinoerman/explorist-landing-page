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
  const buttonVariant = variant && !disabled ? BUTTON_TYPE[variant] : null;
  
  return (
    <button
      className={classNames(
        // Base styles
        "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50",
        // Background and colors
        buttonVariant ? buttonVariant.bg : "bg-gray-400 cursor-not-allowed",
        buttonVariant ? buttonVariant.clr : "text-gray-500",
        buttonVariant?.border || "",
        // Size
        size ? BTN_SIZE[size] : BTN_SIZE.medium,
        // Shape and sizing
        !square ? "rounded-xl" : "rounded-lg",
        square && !children ? "aspect-square min-w-8 min-h-8" : "",
        // Icon spacing (only when both icon and children exist)
        icon && children ? "gap-2" : "",
        // Disabled state
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        // Custom classes
        className || ""
      )}
      disabled={disabled}
      {...rest}
    >
      {icon && !children && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {icon && children && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children && <span>{children}</span>}
      {icon && children && iconPosition === "right" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  );
};

export default Button;
