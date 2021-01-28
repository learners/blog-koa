/**
 * 文章路由
 */
import type { App } from '@/types'
import Router from 'koa-router'

const router = new Router({ prefix: '/article' })

export default (app: App) => {
  const { controllers } = app
  // 获取所有文章
  router.get('/list', () => controllers.articleController.getList())
  // 获取文章详情
  router.get('/detail', () => controllers.articleController.getDetail())

  // 添加文章
  app.use(router.routes())
}
