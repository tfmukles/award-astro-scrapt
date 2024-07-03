/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "community.astro.build**",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "styles.redditmedia.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
