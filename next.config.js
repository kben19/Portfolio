/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"], // prefer modern formats
  },
};
module.exports = nextConfig;
