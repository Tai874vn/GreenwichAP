/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greenwich.edu.vn',
      },
      {
        protocol: 'https',
        hostname: 'cms.greenwich.edu.vn',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;