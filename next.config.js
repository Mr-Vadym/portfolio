const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? '/portfolio' : '',
  assetPrefix: isGitHubPages ? '/portfolio/' : '',
  trailingSlash: isGitHubPages,
};

export default nextConfig;
