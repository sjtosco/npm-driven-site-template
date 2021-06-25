const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var path = require("path");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
            test: /\.html$/i,
            type: "asset/resource",
            },
            {
            test: /.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                    }
                }
            },
        ]
    },
    plugins: [
      new ESLintPlugin(),
      new CopyPlugin({
        patterns: [
          {
            context: path.resolve(__dirname) + "/dist",
            from: "*.html", to: ".."
          },
        ],
      }),        
    ],
    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`
        new HtmlMinimizerPlugin(),
        new TerserPlugin({
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          // parallel: true,
        }),
      ],
    },
    
};
