<<<<<<< HEAD
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
=======
/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  reactStrictMode: true,
});
>>>>>>> parent of 1cf2694 (Merge pull request #26 from risingcurve/google-analytics)
