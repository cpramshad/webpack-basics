const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/resource',
                parser: {
                    // less than 3 kb asset/inline else asset/resource
                    defaultUrlCondition: {
                        maxSize: 3 * 1024 // 3 kb
                    }
                }
            }
        ]
    }
}