// @ts-check
/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // next.js config
    images: {
        unoptimized: true
    },
    output: 'export'
};

// You may want to use a more robust revision to cache
// files more efficiently.
// A viable option is `git rev-parse HEAD`.
const revision = crypto.randomUUID();

module.exports = async () => {
    const withSerwist = (await import("@serwist/next")).default({
        cacheOnNavigation: true,
        swSrc: "app/sw.ts",
        swDest: "public/sw.js",
        additionalPrecacheEntries: [{ url: "/~offline", revision }],
    });
    return withSerwist(nextConfig);
};



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