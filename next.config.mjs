import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    // Note: This is only an example. If you use Pages Router,
    // use something else that works, such as "service-worker/index.ts".
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
});

export default withSerwist({
    images: {
        unoptimized: true
    },
    output: 'export'
});



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         unoptimized: true
//     },
//     output: 'export'
// };
// module.exports = nextConfig




// /** @type {import('next').NextConfig} */
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