import type { App } from '@/types'
import Router from 'koa-router'

const router = new Router()

export default (app: App) => {
  const { controllers } = app
  // 登录
  router.get('/signin', () => controllers.signController.signin())
  // 注册
  router.get('/signup', () => controllers.signController.signup())

  app.use(router.routes())
}
