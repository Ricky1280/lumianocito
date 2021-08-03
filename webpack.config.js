// Copyright 2018 Google LLC.
// SPDX-License-Identifier: Apache-2.0

const path = require("path");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var BrotliPlugin = require('brotli-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlLoader = require("html-loader");

module.exports = {
  entry: {
    apparchive: './public/archive.html'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [{
      test: /\.html$/, // include .html files
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "html-loader"
      }]
    }]
  },
    plugins: [   
    new HtmlWebpackPlugin({
      template: './views/index.html',
      inject: false,
      chunks: ['index'],
      filename: './views/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/archive.html',
      inject: false,
      chunks: ['archive'],
      filename: './public/archive.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/diary.html',
      inject: false,
      chunks: ['diary'],
      filename: './public/diary.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/exhibitions.html',
      inject: false,
      chunks: ['exhibitions'],
      filename: './public/exhibitions.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/fashion.html',
      inject: false,
      chunks: ['fashion'],
      filename: './public/fashion.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/graphicdesign.html',
      inject: false,
      chunks: ['graphicdesign'],
      filename: './public/graphicdesign.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/info.html',
      inject: false,
      chunks: ['info'],
      filename: './public/info.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/mixedmedia.html',
      inject: false,
      chunks: ['mixedmedia'],
      filename: './public/mixedmedia.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/othermediums.html',
      inject: false,
      chunks: ['othermediums'],
      filename: './public/othermediums.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/performance.html',
      inject: false,
      chunks: ['performance'],
      filename: './public/performance.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/personal.html',
      inject: false,
      chunks: ['personal'],
      filename: './public/personal.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/photography.html',
      inject: false,
      chunks: ['photography'],
      filename: './public/photography.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/portfolioarchive.html',
      inject: false,
      chunks: ['portfolioarchive'],
      filename: './public/portfolioarchive.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/press.html',
      inject: false,
      chunks: ['press'],
      filename: './public/press.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/amalie-ongoing.html',
inject: false,
chunks: ['amalie-ongoing'],
filename: './public/amalie-ongoing.html'
}),
          new HtmlWebpackPlugin({
            template: './public/sculpture.html',
      inject: false,
      chunks: ['sculpture'],
      filename: './public/sculpture.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/unseen.html',
      inject: false,
      chunks: ['unseen'],
      filename: './public/unseen.html'
    }),
          new HtmlWebpackPlugin({
            template: './public/videoprojects.html',
      inject: false,
      chunks: ['videoprojects'],
      filename: './public/videoprojects.html'
    }),
      new HtmlWebpackPlugin({
        template: './public/when-in-harlem.html',
      inject: false,
      chunks: ['when-in-harlem'],
      filename: './public/when-in-harlem.html'
    }),
         new HtmlWebpackPlugin({
        template: './public/fashion2020.html',
      inject: false,
      chunks: ['fashion2020'],
      filename: './public/fashion2020.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/missionstatement.html',
    inject: false,
    chunks: ['missionstatement'],
    filename: './public/missionstatement.html'
  }),
  new HtmlWebpackPlugin({
    template: './public/coveteur.html',
  inject: false,
  chunks: ['coveteur'],
  filename: './public/coveteur.html'
}),
new HtmlWebpackPlugin({
  template: './public/miaou.html',
inject: false,
chunks: ['miaou'],
filename: './public/miaou.html'
}),
new HtmlWebpackPlugin({
  template: './public/nylonjapan.html',
inject: false,
chunks: ['nylonjapan'],
filename: './public/nylonjapan.html'
}),
new HtmlWebpackPlugin({
  template: './public/personal2020.html',
inject: false,
chunks: ['personal2020'],
filename: './public/personal2020.html'
}),
    new MiniCssExtractPlugin({filename: "[name].css"}),
    new BrotliPlugin({
      asset: '[file].br',
      test: /\.js|css|html$/,
    })
  ]
};


