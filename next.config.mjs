/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // matches any path
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // matches any path
      },
    ],
    //unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // Enables static export
  trailingSlash: true,
};

export default nextConfig;
