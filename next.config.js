// Progressive Web App: Add service worker with network-first strategy.
// Network-first strategy means that if there is no internet connection,
// the browser will use files previously saved locally to the user’s device instead.
// AKA Offline Mode!
const withOffline = require('next-offline');

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withOffline(nextConfig);
