const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.daisyui.com','uploads-ssl.webflow.com','img.youtube.com'],
      },
}

module.exports = withContentlayer(nextConfig)