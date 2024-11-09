/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/My-Portfolio' : '',
  assetPrefix: isProd ? '/My-Portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;