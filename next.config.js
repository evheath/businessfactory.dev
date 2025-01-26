/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "firebasestorage.googleapis.com" },
      { hostname: "tailwindui.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "o8jsjsxk9g.ufs.sh" },
    ],
  },
};

module.exports = nextConfig;
