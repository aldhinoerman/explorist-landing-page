/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "friendlybalitour.com",
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "strapi.engkensoft.cloud"
      }
    ],
  },
};

export default nextConfig;
