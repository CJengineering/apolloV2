const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.daisyui.com','uploads-ssl.webflow.com'],
      },
}

module.exports = withContentlayer(nextConfig)