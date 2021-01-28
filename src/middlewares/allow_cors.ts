/**
 * 允许 CORS 跨域请求
 */
import type { App } from '@/types'

export = async (ctx: App.Context, next: App.Next) => {
  ctx.set('Access-Control-Allow-Headers', 'Content-Type')
  ctx.set('Access-Control-Allow-Methods', '*')
  ctx.set('Access-Control-Allow-Origin', '*')

  if (ctx.req.method === 'OPTIONS') {
    ctx.status = 204
  } else {
    await next()
  }
}
