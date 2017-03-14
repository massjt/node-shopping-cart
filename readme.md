## NodeJS shopping cart
> use NodeJS Express MongoDB

安装NodeJS
[download website](https://nodejs.org/en/download/)

使用express生成器
[express generator](http://expressjs.com/zh-cn/starter/generator.html)

	npm install express-generator -g
	
	express shopping-cart --hbs // --hbs为handlebars模板

	npm install 

	npm start // 启动服务

Handlebars 是 JavaScript 一个语义模板库，通过对 view 和 data 的分离来快速构建 Web 模板,使用 express-handlebars 这个第三方包添加对 Handlebars 的支持。
	npm install express-handlebars --save

[express-handlebars配置](https://www.npmjs.com/package/express-handlebars)

```
var expressHbs = require('express-handlebars');

var app = express();

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs')

//文档结构 views/layouts/layout.hbs
```

### express-handlebars使用注意点

模板中 `{{{ body }}}` 用作占位符，显示主内容
默认配置:
- `layoutsDir="views/layouts/"`
- `partialsDir="views/partials/"

应用局部模板:

如: `{{> foo/bar}}` , 默认的是调用 `views/partials/foo/bar.handlebars`

## mongoose
> Mongoose是一个提供了MongoDB api 映射的Node.js库，即用于连接Node.JS与MongoDB的中间件
> 可以理解: Mongoose将数据库中的数据转换为JavaScript对象以供你在应用中使用,是使用Mongoose来创建并存储数据。

```
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');
```

mongoose.Schema方法用来定义数据集的格式（schema），mongoose.model方法将格式分配给指定的数据集。

- [mongoose](http://mongoosejs.com/index.html)
- [mongoose api](http://mongoosejs.com/docs/api.html)
- [阮一峰mongoose](http://javascript.ruanyifeng.com/nodejs/mongodb.html)
- [blog整个项目教程](https://maninboat.gitbooks.io/n-blog/content/)

## models
> 对应mongoose orm
	/models 目录
	mongoose.model('Product', schema);
	model方法中的Product对应的数据集名为products

## seed
> 数据集生成
	/seed

在数据集生成中，最后的`mongoose.disconnect()`操作，注意位置！
**数据库保存操作是异步的，如果要结束数据库连接，请确保在保存结束后，再执行结束连接操作**

[node seed时错误:DeprecationWarning: Mongoose: mpromise](http://stackoverflow.com/questions/38138445/node3341-deprecationwarning-mongoose-mpromise)

## csurf
> Node.js CSRF protection middleware

[csurf](https://github.com/expressjs/csurf)

注意: Requires either a session middleware or cookie-parser to be initialized first.

安装好后，在路由文件中引用

## session
> npm install express-session --save

## passport
> 用户认证，npm install passport --save

[使用passport前需要配置](http://passportjs.org/docs/configure)

[具体步骤含义参考](http://blog.chengjianhua.cn/2016/06/22/authenticate-by-passport/)

遇到的大坑，在看`passport.js`的文时，没有理解`passport.serializeUser`和`passport.deserializeUser`含义，特别是案例中的参数user,

一直遇到报错，`ReferenceError: user is not defined`,纠其原因，主要是没理解这两个方法的含义

`serializeUser` 是用户登录验证成功后，把相应的数据存到session中，其参数就是 `new LocalStrategy()`中回调的值

`deserializeUser` 是根据 `serializeUser`存储在session中的值，读取用户的全部数据对象，并封装到req.user里

## bcrypt-nodejs
> hash password, npm install bcrypt-nodejs --save

## connect-flash
> The flash is a special area of the session used for storing messages.消息闪存，相当于laravel中with

`npm install connect-flash --save`

## passport-local
> 使用用户名和密码的验证策略

[passport-local doc](https://github.com/jaredhanson/passport-local)

注意: 默认的username 和 password改成自定义的方式

`npm install passport-local --save` 

## express-validator

[express-validator](https://github.com/ctavan/express-validator)