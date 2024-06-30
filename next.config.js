/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "media.licdn.com",
        hostname:"via.placeholder.com"
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
