/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: 'export'
};
module.exports = nextConfig

// const withPWA = require('next-pwa')({
//     dest: 'public'
// })

// module.exports = withPWA({
//     // next.js config
//     images: {
//         unoptimized: true
//     },
//     output: 'export'
// })