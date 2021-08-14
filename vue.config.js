const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const pxtovw = require('postcss-px-to-viewport');
module.exports = {
    parallel: false,

    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'main',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置别名
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    },
    css:{
        loaderOptions:{
            sass:{
                //给sass-loader传递选项
            },
            css:{
                //给css-loader传递选项
            },
            postcss:{
                //给postcss-loader传递选项
                plugins:[
                    new pxtovw({
                        unitToConvert: 'px', //需要转换的单位，默认为"px"；
                        viewportWidth: 375, //设计稿的视口宽度
                        unitPrecision: 5, //单位转换后保留的小数位数
                        propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
                        viewportUnit: 'vw', //转换后的视口单位
                        fontViewportUnit: 'vw', //转换后字体使用的视口单位
                        selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
                        minPixelValue: 1, //设置最小的转换数值
                        mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
                        replace: true, //是否直接更换属性值，而不添加备用属性
                        exclude: [/node_modules/] //忽略某些文件夹下的文件
                    })
                ]
            }
        }
    },
    devServer: {
        // 本地ip地址
        host: 'localhost',
        port: 2333,
        open: true,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://192.168.1.126:8080/',
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

}
