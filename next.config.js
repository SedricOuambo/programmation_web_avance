// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         unoptimized: true
//     },
//     output: 'export'
// };
// module.exports = nextConfig


// import { withPWA } from 'next-pwa';
// import { isProd } from 'next-pwa'; // Cette importation n'est pas nécessaire si vous avez déjà une façon de détecter si l'application est en mode production

// export default withPWA({
//     pwa: {
//         dest: 'public',
//         disable: !isProd // Activer le service worker uniquement en mode production
//     },
//     images: {
//         unoptimized: true
//     },
//     output: 'export'
// });


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: 'export'
};

const withPWA = require('next-pwa');
const { withPlugins } = require('next-compose-plugins');

module.exports = withPlugins([
    [withPWA, {
        pwa: {
            dest: 'public',
            disable: process.env.NODE_ENV !== 'production' // Activer le service worker uniquement en mode production
        }
    }]
], nextConfig);
