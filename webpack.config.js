/* eslint-env node */
/* eslint-disable max-lines-per-function */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const AntdThemePlugin = require("antd-theme/plugin");

const cacheBuster = Date.now();

const getBabelEnv = (env) => {
  if (env.prod) return "production";
  if (env.instrument) return "instrument";
  if (env.test) return "test";
  return "development";
};

const PROD_SPECIFIC_PLUGINS = [new CleanWebpackPlugin()];
const NON_PROD_SPECIFIC_PLUGINS = [new ReactRefreshWebpackPlugin()];

// for local dev, graphql server is assumed to be hosted here
const GRAPHQL_SERVER_LOCATION = "http://localhost:4000/graphql";

const SWC_LOADER_DEVELOP = {
  loader: require.resolve("swc-loader"),
  options: {
    jsc: {
      transform: {
        react: {
          development: true,
          refresh: true,
        },
      },
    },
  },
};

const SWC_LOADER_PRODUCTION = {
  loader: require.resolve("swc-loader"),
};

function getTranspileLoader(env) {
  if (env.prod) return SWC_LOADER_PRODUCTION;
  if (env.development) return SWC_LOADER_DEVELOP;
  // SWC loader does not yet support instrumentation
  return {
    loader: "babel-loader",
    options: {
      // supports instrumenting the code for code-coverage analysis when environment is 'instrument'
      envName: getBabelEnv(env),
    },
  };
}

module.exports = (env) => {
  const extraPlugins = env.prod
    ? PROD_SPECIFIC_PLUGINS
    : NON_PROD_SPECIFIC_PLUGINS;

  return {
    stats: {
      timings: true,
    },
    mode: env.prod ? "production" : "development",
    devtool: env.prod ? "source-map" : "eval-source-map",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].bundle.[contenthash].js",
      chunkFilename: "[name].bundle.[contenthash].js",
    },
    // improve dev resource usage by only watching repo files
    watchOptions: {
      ignored: /node_modules/u,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(graphql|gql)$/iu,
          exclude: /node_modules/iu,
          loader: "graphql-tag/loader",
        },
        {
          test: /\.less$/iu,
          // avoid tree-shaking stylesheets
          sideEffects: true,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.css$/iu,
          // avoid tree-shaking stylesheets
          sideEffects: true,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/u,
          exclude: /node_modules/u,
          use: getTranspileLoader(env),
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/u,
          type: "asset/resource",
        },
        {
          test: /\.(svg)$/u,
          issuer: /\.less$/u,
          type: "asset/inline",
        },
        {
          test: /\.svg$/u,
          issuer: /\.(js|jsx)$/u,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(png|jpg|gif|lottie)$/u,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          loader: "svg-inline-loader",
        },
        // {
        //   test: /\.(j|t)sx?$/,
        //   use: [
        //     {
        //       loader: "babel-loader",
        //       options: {
        //         plugins: [
        //           [
        //             "import",
        //             {
        //               libraryName: "antd",
        //               style: true,
        //             },
        //           ],
        //         ],
        //         presets: ["react-app"],
        //       },
        //     },
        //   ],
        // },
        // {
        //   test: /\.less$/i,
        //   use: [
        //     {
        //       loader: AntdThemePlugin.loader,
        //     },
        //     {
        //       loader: "css-loader",
        //     },
        //     {
        //       loader: "less-loader",
        //       options: {
        //         javascriptEnabled: true,
        //       },
        //     },
        //   ],
        // },
      ],
    },
    plugins: [
      // Uncomment this next line to diagnose which webpack plugins are causing slowness in the build
      // new SpeedMeasurePlugin(),
      //
      // Uncomment this next line to get a view of bundle sizes
      // new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        cacheBuster,
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.dist.html",
        filename: "index.dist.html",
        cacheBuster,
      }),
      new CopyPlugin({
        patterns: [
          // {
          //   from: path.resolve(__dirname, "config/app-config.js"),
          //   to: path.resolve(
          //     __dirname,
          //     "dist",
          //     "config",
          //     `app-config.js?${cacheBuster}`
          //   ),
          // },
          {
            from: path.resolve(__dirname, "public"),
            to: path.resolve(__dirname, "dist/assets"),
          },
        ],
      }),
      // new AntdThemePlugin({
      //   // Variables declared here can be modified at runtime
      //   variables: ["primary-color"],
      //   themes: [
      //     {
      //       name: "dark",
      //       filename: require.resolve("antd/lib/style/themes/dark.less"),
      //     },
      //     {
      //       name: "compact",
      //       filename: require.resolve("antd/lib/style/themes/compact.less"),
      //     },
      //   ],
      // }),
      ...extraPlugins,
    ],
    resolve: {
      alias: {},
      extensions: [".tsx", ".ts", ".js"],
    },
    optimization: {
      minimize: Boolean(env.prod),
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
    devServer: {
      static: [path.join(__dirname, "dist"), path.join(__dirname, "public")],
      compress: true,
      historyApiFallback: true,
      proxy: {
        "/graphql": GRAPHQL_SERVER_LOCATION,
      },
    },
  };
};
