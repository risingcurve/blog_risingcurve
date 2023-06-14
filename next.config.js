// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const { withContentlayer } = require('next-contentlayer')
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
      },
}

module.exports = withContentlayer(nextConfig)

// const { withContentlayer } = require("next-contentlayer");

// import { withContentlayer } from 'next-contentlayer'

// export default withContentlayer({ })

// module.exports = withContentlayer({
//   reactStrictMode: true,
// });
