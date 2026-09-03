import path from 'node:path';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'happigo-travel-coop-experiences';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? `/${repositoryName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: path.resolve(process.cwd()),
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
