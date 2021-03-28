/**
 * 检查用户是否登录
 */
import type { App } from '@/types'
import { errorModel, STATUS } from '@/common/model'

module.exports = async (ctx: App.Context, next: App.Next) => {
  if (ctx.session.user) {
    await next()
  } else {
    ctx.body = errorModel(STATUS.NO_LOGIN)
  }
}
