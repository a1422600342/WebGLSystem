module.exports = {
    publicPath: "./",
    outputDir: "dist",
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '基于WebGL的智慧楼宇三维监控系统',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        open: true
    }
}