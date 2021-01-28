/**
 * 检查用户是否登录
 */
import type { App } from '@/types'
const { error, STATUS } = require('@/common/model')

module.exports = async (ctx: App.Context, next: App.Next) => {
  if (ctx.session.user) {
    await next()
  } else {
    ctx.body = error('用户未登录', STATUS.NO_LOGIN)
  }
}
