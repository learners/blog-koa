import type { App } from '@/types'
import Router from 'koa-router'

import signValidator from '@/validators/sign'

const router = new Router()

export default (app: App) => {
  const { controllers } = app
  // 登录
  router.get('/signin', signValidator.signin, controllers.signController.signin)
  // 注册
  router.get('/signup', signValidator.signup, controllers.signController.signup)

  app.use(router.routes())
}
