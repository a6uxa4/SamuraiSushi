/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/carousel",
      "embla-carousel-react",
      "lucide-react",
    ],
  },
};

export default nextConfig;
