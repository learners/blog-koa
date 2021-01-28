import type { App } from '@/types'
import Router from 'koa-router'

const router = new Router({ prefix: '/user' })

export default (app: App) => {
  const { controllers } = app

  app.use(router.routes())
}
