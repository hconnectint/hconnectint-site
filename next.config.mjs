/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Experimental options adjusted for Next.js 14.2.16
  experimental: {
    // turbo needs to be an object in Next.js 14.2.16
    turbo: {
      enabled: true,
    },
  },
};

export default nextConfig;
