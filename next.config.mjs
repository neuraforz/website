/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable server-side features for static export
  experimental: {
    serverActions: false,
  },
};

export default nextConfig;
