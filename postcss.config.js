module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-import": {},
    // tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
