/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "media.graphassets.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
