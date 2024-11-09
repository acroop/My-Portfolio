/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: "/My-Portfolio",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
