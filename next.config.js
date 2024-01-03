/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'seedx.seedwebs.app',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
