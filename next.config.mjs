import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(process.cwd()),
  images: {
    // Bypass the local dev-server optimizer when it runs in a restricted network sandbox.
    // Vercel/production continues to use Next's optimized image pipeline.
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
