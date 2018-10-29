const path = require("path");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:'./main.js',
    output:{
        path:path.resolve(__dirname,'./js/'),
        filename:'mouseWheel.js'
    },
    // mode:'development',   //这里设置
    // 据说，在webpack4当中,如果设置了模式为产品模式，则没有必要再进行压缩了
    optimization:{
        minimize : true,
        // 
        // minimizer : [new optimizeCss({})]
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // 将样式css文件分离为独立的css文件，避免内嵌到html中去
                use:extractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {
                            loader:'css-loader'
                        },
                        {
                            loader:'postcss-loader'
                        }
                    ]
                }),
                exclude:path.resolve(__dirname,"./node_modules")

                // use:[
                //     {
                //         loader:'style-loader'
                //     },
                //     {
                //         loader:'css-loader',
                //         // 这个貌似是webpack3中的写法
                //         // options:{
                //         //     minimize:true
                //         // }
                //     },
                //     {
                //         loader:'postcss-loader'
                //     }
                // ]
            },
            {
                test:/\.js/,
                use:["babel-loader"],
                exclude:path.resolve(__dirname,"./node_modules")
            }
        ]
    },
    plugins:[
        new extractTextWebpackPlugin({
            filename:"./[name].css"
        }),
        // 压缩CSS代码用的插件，暂时还没研究怎么用，以后再看看
        // new optimizeCss({
        //     cssProcessor:require('cssnano'),
        // }),
    ]
};