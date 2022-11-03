/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// next.config.js
module.exports = {
  async rewrites() {
      return [
        {
          source: '/(.*)',
          destination: '/dana/infoDisp/sendEsp',
        },
      ]
    },
};

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig
