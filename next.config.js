/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["assets.tina.io"],
  },
};

module.exports = nextConfig;
