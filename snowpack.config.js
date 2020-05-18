const rollupPluginSvelte = require("rollup-plugin-svelte");

module.exports = {
  extends: "@snowpack/app-scripts-svelte",

  installOptions: {
    rollup: {
      plugins: [
        rollupPluginSvelte({
          dev: process.env.NODE_ENV !== "production",
        }),
      ],
    },
  },
};
