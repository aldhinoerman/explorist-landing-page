interface Window {
  TA: {
    init: () => void;
  };
}

declare module "*.md" {
  const value: string; // markdown is just a string
  export default value;
}
