/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  images: {
    domains: ['www.zebra.com', 'img.en25.com'],
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/scanselector',
        permanent: true,
      },
    ]
  },
  i18n,
};