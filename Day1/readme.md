1. 新建空项目，运行 npm init -y 命令，初始化包管理配置文件 package.json
2. 新建 src 源代码目录
3. 新建 src -> index.html 首页和 src -> index.js 脚本文件
4. 初始化首页基本的结构
5. 运行 npm install jquery -S 命令， 安装jQuery         --save = -S
6. 通过ES6模块化的方式导入jQuery，实现列表隔行变色效果


webpack.config.js文件的作用

它是webpack的配置文件，webpack在真正开始打包构建之前，会先读取这个配置文件，从而基于给定的配置，对项目进行打包

webpack 默认打包文件入口 src -> index.js
        默认输出文件路径 dist -> main.js

webpack-dev-server 省得每次修改源代码后都要运行一次 npm run dev
                   每当修改了源代码，webpack 会自动进行项目的打包和构建

html-webpack-plugin
通过 HTML 插件复制到项目根目录中的 index.html 页面，也被放在了内存中
HTML 插件在生产的 index.html 页面，自动注入了打包的 bundle.js 文件