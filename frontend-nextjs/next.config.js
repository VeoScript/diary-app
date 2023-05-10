/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_API_URL: process.env.DEV_API_URL,
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
  },
  images: {
    domains: [
      'localhost',
    ],
  },
}

module.exports = nextConfig
