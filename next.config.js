/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/talent', // The base path for your GitHub Pages repo
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 