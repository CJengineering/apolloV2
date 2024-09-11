const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.daisyui.com','uploads-ssl.webflow.com','img.youtube.com'],  unoptimized: true,
      },
      async redirects() {
        return [
          {
            source: '/programmes/jameel-observatory-crewsnet',
            destination: '/programmes/jameel-observatory/crewsnet',
            permanent: true, // Set to true for a 301 permanent redirect
          },
          {
            source: '/programmes/jpal-air-and-water-labs',
            destination: '/programmes/j-pal/air-and-water-labs',
            permanent: true, // Set to true for a 301 permanent redirect
          },
        ];
      }
}

module.exports = withContentlayer(nextConfig)