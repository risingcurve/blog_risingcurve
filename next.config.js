// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


const { withContentlayer } = require("next-contentlayer");

// import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({ })

module.exports = withContentlayer({
  reactStrictMode: true,
});
