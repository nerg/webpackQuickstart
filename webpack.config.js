module.exports = {
    entry: "./app/boot",
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points        
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']        
    },
    module: {
        loaders: [{
            test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
        }]
    }    
};