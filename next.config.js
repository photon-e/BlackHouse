const isProd = process.env.NODE_ENV === 'production'
const repoName = 'BlackHouse'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
}
