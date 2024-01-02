/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // env: {
  //   NEXT_PUBLIC_ZEGO_APP_ID: 73282224,
  //   NEXT_PUBLIC_ZEGO_SERVER_SECRET: "aa44d2079f498893452cd882b2f63326",
  // },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
