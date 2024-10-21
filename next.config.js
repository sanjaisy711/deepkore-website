/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    experimental: {
      reactRefresh: false,
    },
    
    experimental: {
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    },
}


module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
