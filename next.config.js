const { withContentlayer } = require("next-contentlayer");


const nextConfig = {
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};

module.exports = withContentlayer({
  nextConfig,
  reactStrictMode: true,
});