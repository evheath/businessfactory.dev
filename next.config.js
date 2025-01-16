/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "firebasestorage.googleapis.com" },
      { hostname: "tailwindui.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
