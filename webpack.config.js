var path = require('path');
module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        library: 'ScratchBlocks3D',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};