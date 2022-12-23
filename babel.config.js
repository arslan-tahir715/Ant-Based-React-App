/* eslint-env node */
module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: "> 0.25%, not dead, not ie 11",
      },
    ],
  ],
  env: {
    // Local Development config
    development: {
      plugins: [require.resolve("react-refresh/babel")],
    },
    // Config for running jest tests
    test: {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
    },
    // Config for instrumenting the code to obtain cypress code coverage
    instrument: {
      plugins: ["istanbul"],
    },
  },
};
