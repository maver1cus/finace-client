/** @type {import('next').NextConfig} */

const api = process.env.API_HOST || 'htpp://localhost:3010';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: [{ source: '/api/:path*', destination: `${api}/:path*` }],
};

module.exports = nextConfig;
