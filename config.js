// eslint-disable-next-line no-undef
module.exports = {
  source: ["src/styles/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/styles/",
      files: [
        {
          format: "css/variables",
          destination: "variables.css",
        },
      ],
    },
  },
};
