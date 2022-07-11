/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'tailwindui.com',
      'images.unsplash.com',
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true
    },
    newNextLinkBehavior: true
  }
}

module.exports = nextConfig
