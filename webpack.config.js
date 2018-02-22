var config = {
    entry: './main.js',
     
    output: {
       path:'/',
       filename: 'index.js',
    },
     
    devServer: {
      port: 8080,
      hot: true,
      compress: false,
      historyApiFallback: true,
      stats: {
        colors: true,
        timings: true,
        version: true,
        warnings: true
      }
    },
     
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
                 
             query: {
                presets: ['es2016', 'react']
             }
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 4,
                },
                pngquant: {
                  quality: '75-90',
                  speed: 3,
                },
              },
            }],
            exclude: /node_modules/,
            include: __dirname,
          },
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader/url" },
              { loader: "file-loader" }
            ]
          }
       ]
    },

 }
 
 module.exports = config;