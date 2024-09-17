/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        type: 'asset/source',
      }
    )
    return config
  },
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
