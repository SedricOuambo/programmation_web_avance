import { injectManifest, type ManifestTransform } from "@serwist/build";

/**
 * A custom build ID.
 */
declare const BUILD_ID: string;
/**
 * Hash a file based on its contents.
 */
declare const hashFile: (file: string) => string;
/**
 * Whether the server is currently in development mode.
 */
declare const dev: boolean;

const manifestTransform: ManifestTransform = async (manifestEntries) => {
  const manifest = manifestEntries.map((m) => {
    if (m.url === "dQw4w9WgXcQ") {
      m.url = "get-rick-rolled.mp4";
      m.revision = hashFile("static/get-rick-rolled.mp4");
    }
    return m;
  });
  return { manifest, warnings: [] };
};

injectManifest({
  // The path to the service worker file that will be read during the build process.
  swSrc: "app/sw.ts",
  // The path and filename of the service worker file that will be created by the build process.
  swDest: "dist/sw.js",
  // The string to find inside of the `swSrc` file. Once found, it will be replaced by the
  // generated precache manifest.
  injectionPoint: "self.__HI_MOM",
  // Whether the precache manifest should be set to `undefined`. Useful when you want it to only
  // check if the provided options are valid.
  disablePrecacheManifest: dev,
  // A list of entries to be precached, in addition to any entries that are generated as part of
  // the build configuration.
  additionalPrecacheEntries: [
    {
      url: "/~offline",
      revision: BUILD_ID,
    },
    {
      url: "/manifest.json",
      revision: hashFile("static/manifest.json"),
    },
  ],
  // Assets that match this will be assumed to be uniquely versioned via their URL, and exempted
  // from the normal HTTP cache-busting that's done when populating the precache.
  // NOTE: THE SERWIST TEAM IS NOT THAT GOOD AT REGEXPS. JUST KNOW THAT.
  dontCacheBustURLsMatching: /^dist\/static\/([a-zA-Z0-9]+)\.([a-z0-9]+)\.(css|js)$/,
  // One or more functions which will be applied sequentially against the generated manifest.
  manifestTransforms: [manifestTransform],
  // Determines the maximum size of files that will be precached.
  maximumFileSizeToCacheInBytes: 7355608,
  modifyURLPrefix: {
    // hi-mom/index.GdhNyhN1.js -> index.GdhNyhN1.js
    "hi-mom/": "",
  },
  // The local directory you wish to match `globPatterns` against.
  globDirectory: "dist/static",
  // Determines whether or not symlinks are followed when generating the precache manifest.
  globFollow: false,
  // A set of patterns matching files to always exclude when generating the precache manifest.
  globIgnores: ["**\/node_modules\/**\/*"],
  // Files matching any of these patterns will be included in the precache manifest.
  globPatterns: ["**/*.{js,css,html,png,webmanifest,json}"],
  // If true, an error reading a directory when generating a precache manifest will cause the
  // build to fail. If false, the problematic directory will be skipped.
  globStrict: false,
  // A map from URLs whose content is server-side rendered to either unique keys or sets of glob
  // patterns that should match the files used to render said content.
  templatedURLs: {
    "/legacy-home": ["legacy/home/*.html"],
  },
  // Other options...
  // See http://serwist.pages.dev/docs/build/configuring
});