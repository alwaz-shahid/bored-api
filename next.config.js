/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imgur.com','i.imgur.com','media1.giphy.com'],
  },
}

module.exports = nextConfig
