module.exports = {
    entry: ['./global.js', "./app.jsx"],
    output: {
        filename: "bundle.js"
    },
    watch: true,
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: [/\.jsx$/, /\.es6$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6', '.jsx']
    },
};