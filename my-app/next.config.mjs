/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ecom-developer-exercise' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ecom-developer-exercise/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
