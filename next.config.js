/** @type {import('next').NextConfig} */
const isProd = require('next-pwa');
const nextConfig = {
    pwa: {
        dest: 'public',
        disable: !isProd // Activer le service worker uniquement en mode production
    },
    images: {
        unoptimized: true
    },
    output: 'export'
};
module.exports = nextConfig


// const withPWA = require('next-pwa');
// const isProd = require('next-pwa');// Cette importation n'est pas nécessaire si vous avez déjà une façon de détecter si l'application est en mode production

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