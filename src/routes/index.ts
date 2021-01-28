/**
 * 路由注册
 */
import type { App } from '@/types'
import Router from 'koa-router'

import articleRoute from './article'
import userRoute from './user'
import signRoute from './sign'

const router = new Router()

// 首页
router.get('/', async (ctx: App.Context, next: App.Next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
router.allowedMethods()

export = (app: App) => {
  // 公共路由
  app.use(router.routes())
  // 登录注册模块
  signRoute(app)
  // 用户模块
  userRoute(app)
  // 文章模块
  articleRoute(app)
}
