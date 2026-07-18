/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' && Boolean(repoName);
const basePath = isGithubPages ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactCompiler: true,
};

export default nextConfig;
