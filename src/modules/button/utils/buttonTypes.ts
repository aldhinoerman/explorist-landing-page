const BUTTON_TYPE = {
  default: {
    bg: "bg-secondary hover:bg-secondary/90 active:bg-secondary/80",
    clr: "text-white",
    border: "",
  },
  primary: {
    bg: "bg-primary hover:bg-primary/90 active:bg-primary/80",
    clr: "text-white",
    border: "",
  },
  secondary: {
    bg: "bg-gray-100 hover:bg-gray-200 active:bg-gray-300",
    clr: "text-gray-900",
    border: "",
  },
  danger: {
    bg: "bg-danger hover:bg-danger/90 active:bg-danger/80",
    clr: "text-white",
    border: "",
  },
  success: {
    bg: "bg-success hover:bg-success/90 active:bg-success/80",
    clr: "text-white",
    border: "",
  },
  outline: {
    bg: "bg-transparent hover:bg-primary/10 active:bg-primary/20",
    clr: "text-primary",
    border: "border border-primary",
  },
  ghost: {
    bg: "bg-transparent hover:bg-gray-100 active:bg-gray-200",
    clr: "text-gray-700",
    border: "",
  },
};

const BTN_SIZE = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export { BUTTON_TYPE, BTN_SIZE };
