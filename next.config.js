/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.seadn.io",
        port: "",
        pathname: "/gae/*",
      },
    ],
  },
};

module.exports = nextConfig;
