/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // add hostname for images
  images: {
    domains: [
      "localhost",
      "d2gpdf5dvnjyvd.cloudfront.net",
      process.env.GET_COFFEES_URL,
    ],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2gpdf5dvnjyvd.cloudfront.net",
        port: "",
        pathname: "/",
      },
    ],
  },
};

export default nextConfig;
