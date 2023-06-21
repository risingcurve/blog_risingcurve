const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
