const path = require('path');

module.exports = {
    entry: {
        home: './src/home.jsx',
        scroll: './src/scroll.jsx'

    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js' 
    }, 
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ 
                    {
                        loader: 'file-loader'
                    },
                ],
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}