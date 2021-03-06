const withPrefresh = require("@prefresh/next");
const p = process.env.NODE_ENV === "production";

// module.exports = {

// };


module.exports = withPrefresh({
  env: {
    api: p ? "https://api.mocki.io/v1/fb925b6c/" : "http://localhost:3000/",
  },
  experimental: {
    modern: true,
    polyfillsOptimization: true,
    redirects() {
      return [{
          source: "/about.html",
          destination: "/about",
          permanent: true,
        },
        {
          source: "/posts.html",
          destination: "/posts",
          permanent: true,
        },
      ];
    },
  },
  webpack(config, {
    dev,
    isServer
  }) {
    const splitChunks = config.optimization && config.optimization.splitChunks;
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups;
      const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
          test: preactModules,
        });
        cacheGroups.commons.name = "framework";
      } else {
        cacheGroups.preact = {
          name: "commons",
          chunks: "all",
          test: preactModules,
        };
      }
    }

    // inject Preact DevTools
    if (dev && !isServer) {
      const entry = config.entry;
      config.entry = () =>
        entry().then((entries) => {
          entries["main.js"] = ["preact/debug"].concat(
            entries["main.js"] || []
          );
          return entries;
        });
    }

    return config;
  },
});