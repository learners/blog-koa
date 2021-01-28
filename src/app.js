// 注册模块别名
require('module-alias/register')
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('app:*')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const cors = require('@koa/cors')

const config = require('./config')
const routes = require('./routes')
const registControllers = require('./middlewares/regist_controllers')(app)

// 错误处理
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'hbs',
  map: { hbs: 'handlebars' }
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 会话配置
app.keys = config.appKeys
app.use(session({
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  store: redisStore({
    host: config.redis.host,
    port: config.redis.port,
    pass: config.redis.password
  })
}))

// 注册控制器
app.use(registControllers)
// 允许 CORS 跨域
app.use(cors())

// 注册路由
routes(app)

app.on('error', (err, ctx) => {
  console.error(err, ctx)
})

module.exports = app
