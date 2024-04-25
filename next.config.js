const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */
module.exports = async (phase) => {
    /** @type {import("next").NextConfig} */
    const nextConfig = {
        images: {
            unoptimized: true
        },
        output: 'export'
    };

    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
        const withSerwist = (await import("@serwist/next")).default({
            // Note: This is only an example. If you use Pages Router,
            // use something else that works, such as "service-worker/index.ts".
            swSrc: "app/sw.ts",
            swDest: "public/sw.js",
        });
        return withSerwist(nextConfig);
    }

    return nextConfig;
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