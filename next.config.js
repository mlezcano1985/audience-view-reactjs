/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s3-eu-west-1.amazonaws.com'],
  },
  env: {
    BASE_URL: 'https://us-central1-techtaskapi.cloudfunctions.net',
  },
}

module.exports = nextConfig
