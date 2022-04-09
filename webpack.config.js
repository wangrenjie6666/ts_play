//引入一个包
const path=require('path');
//引入html插件
const HtmlWebpackPlugin=require('html-webpack-plugin');
//引入clean插件
const {CleanWebpackPlugin} =require('clean-webpack-plugin');


//Webpack里面所有的配置信息都应该写在module.exports中
module.exports={
    
    //指定入口文件
    entry:"./src/index.ts",
    //指定打包文件所在的目录
    output:{
        //指定打包文件的目录
        path:path.resolve(__dirname,'dist'),
        //打包后文件的文件
        filename:"bundle.js",
        //告诉webpack不使用箭头函数
        environment:{
            arrowFunction:false,
            const:false,
        }
    },

    //指定webpack打包时要使用的模块
    module:{
        //指定要加载的规则
        rules:[
            //ts与js的文件处理
            {
                //test指定的是规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //配置babel
                 {
                    //指定加载器
                    loader:"babel-loader",
                    //设置babel
                    options:{
                        //设置预定义的环境
                        presets:[
                            [
                                //指定环境的加载器
                                "@babel/preset-env",
                                //配置信息
                                {
                                    //要兼容目标的浏览器
                                    targets:{
                                        "chrome":"58",
                                        "ie":"11"
                                    },
                                    //指定corejs的版本
                                    "corejs":"3",
                                    //使用corejs的方式"useage表示按需加载"
                                    "useBuiltIns":"usage",
                                }
                            ]
                        ]
                    },
                 },
                 //ts的加载器
                 'ts-loader'
                ],
                //要排除的文件
                exclude:/node-modules/,
                
            },
            //less与css的文件处理
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ],
                            }
                        }
                    },
                    'less-loader',
                ]
            }
        ]
    },
    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin(
            {
                template:"./src/index.html" 
            }
        )
    ],
    //用来设置模块
    resolve:{
        extensions:['.ts','.js']
    },
    mode:"development"//设置mode
    
}