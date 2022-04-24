const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors : true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
