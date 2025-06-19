/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  compress: false,
  poweredByHeader: false,
  trailingSlash: false,
  bundlePagesRouterDependencies: true,
  serverExternalPackages: ['bcryptjs', 'jsonwebtoken', 'mongoose'],
  experimental: {
    serverActions: {
      bodySizeLimit: '300mb',
    },
  },
}

module.exports = config;
