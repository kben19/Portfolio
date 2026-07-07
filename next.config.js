/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"], // prefer modern formats
    remotePatterns: [
      // Circular country flags on the About dashboard's Countries tab
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
};
module.exports = nextConfig;
