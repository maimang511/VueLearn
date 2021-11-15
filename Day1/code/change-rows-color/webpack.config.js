// 适用Node.js中的导出语法，向外到处一个webpack

const path = require('path')
// 导入HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',  // 指定原文件的存放路径
    filename: './index.html'       // 指定生成文件的存放路径
})

module.exports = {
    // mode 代表webpack运行的模式，可选值有两个 development  &&  production
    mode: 'development',  // 开发用，打包快
    // mode:'production'

    //  通过 entry 节点指定打包的入口。通过 output 节点制定打包的出口
    entry: path.join( __dirname, './src/index.js'),     // 打包入口文件的路径
    output: {
        path: path.join( __dirname, 'dist'), // 输出文件的存放路径
        filename: 'bundle.js'   // 输出文件的名称
    },

    // 通过plugins节点， 使htmlPlugin 插件生效
    plugins: [htmlPlugin]
}