var path = require('path');

module.exports = {
    mode: 'production',
    entry: './darkmode/index.js',
    output: {
        path: path.resolve('lib'),
        filename: 'darkmode/index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}