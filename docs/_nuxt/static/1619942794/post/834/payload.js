__NUXT_JSONP__("/post/834", (function(a,b){return {data:[{article:{cid:834,title:"Vue cli 笔记",slug:"834",created:1587264480,modified:1592873991,text:"\u003C!--markdown--\u003E![2020-04-19T02:47:53.png][1]\r\n\r\n\r\n## 安装\r\n\r\n全局安装`@vue\u002Fcli`\r\n\r\n```shell\r\nyarn global add @vue\u002Fcli\r\n```\r\n\r\n检查是否安装成功(需重启更新环境变量)\r\n\r\n```bash\r\nvue --version\r\n```\r\n\r\n![2020-04-19T02:36:37.png][2]\r\n\r\n## 快速原型开发\r\n\r\n新版本Vue中增加了该功能，方便快速进行单个Vue文件开发，需要先额外安装一个全局的扩展。\r\n\r\n```shell\r\nyarn global add @vue\u002Fcli-service-global\r\n```\r\n\r\n入手尝鲜\r\n\r\n### 新建index.vue文件\r\n\r\n```html\r\n\u003Ctemplate\u003E\r\n    \u003Cdiv\u003EHello Vue\u003C\u002Fdiv\u003E\r\n\u003C\u002Ftemplate\u003E\r\n```\r\n\r\n### 运行服务\r\n\r\n```shell\r\nvue serve index.vue\r\n```\r\n\r\n### 效果\r\n\r\n![2020-04-19T02:47:22.png][3]\r\n\r\n## 创建项目\r\n\r\n略\r\n\r\n## vue.config.js\r\n在vue cli 3.x\u002F4.x 中，使用vue.cofig.js来进行一些包括webpack的配置。比如我们可以想要一个控制台输出编译时间的配置，可以在如下设置\r\n```javascript\r\nconst moment = require('moment')\r\n\r\nmodule.exports = {\r\n  chainWebpack: config =\u003E {\r\n    config\r\n      .plugin('html')\r\n      .tap(args =\u003E {\r\n        args[0].title = '三只蜜桔后台管理系统·商户版',\r\n        args[0].buildTime = moment().format('YYYY.MM.DD.HH.mm')\r\n        return args\r\n      })\r\n  }\r\n}\r\n\r\n````\r\n\r\n亦或者，我们想要在生产环境禁用console.log\r\n```javascript\r\nconst moment = require('moment')\r\n\r\nmodule.exports = {\r\n  chainWebpack: config =\u003E {\r\n    config\r\n      .plugin('html')\r\n      .tap(args =\u003E {\r\n        args[0].title = '三只蜜桔后台管理系统·商户版',\r\n        args[0].buildTime = moment().format('YYYY.MM.DD.HH.mm')\r\n        return args\r\n      })\r\n    config.optimization\r\n      .minimizer('terser')\r\n      .tap(args =\u003E {\r\n        Object.assign(args[0].terserOptions.compress, {\r\n          pure_funcs: ['console.log']\r\n        })\r\n        return args\r\n      })\r\n  },\r\n  productionSourceMap: false,\r\n  configureWebpack: {\r\n    output: {\r\n      filename: `${moment().format('YYYY.MM.DD.HH.mm')}.${process.env.NODE_ENV}.[name].js`,\r\n      chunkFilename: `${moment().format('YYYY.MM.DD.HH.mm')}.${process.env.NODE_ENV}.[name].js`\r\n    }\r\n  }\r\n}\r\n```\r\n\r\n\r\n\r\n\r\n\r\n  [1]: http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-04-19T02:47:53.png\r\n  [2]: http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-04-19T02:36:37.png\r\n  [3]: http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-04-19T02:47:22.png",order:b,authorId:1,type:"post",status:"publish",commentsNum:2,allowComment:a,allowPing:a,allowFeed:a,parent:b,views:629,likes:3}}],fetch:{},mutations:void 0}}("1",0)));