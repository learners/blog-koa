import type { App, CamelCase, Instances } from '@/types'
import utils = require('@/utils')
import * as Controllers from '@/controllers'
import SuperController from '@/common/controller'

/**
 * 将 controller 存储到 app 中
 * @param {App} app Koa实例对象
 */
export = (app: App) => {
  app.controllers = {} as Instances<typeof Controllers>
  return async (ctx: App.Context, next: App.Next) => {
    const keys = Object.keys(Controllers) as Array<keyof typeof Controllers>
    keys.forEach(key => {
      const Controller = Controllers[key]
      // 是否为 SuperController 的子类
      if (Object.getPrototypeOf(Controller) === SuperController) {
        const controller = new Controller(ctx)
        // 存储 controller 实例
        utils.set(app.controllers, `${key.charAt(0).toLowerCase()}${key.slice(1)}` as CamelCase<typeof key>, controller)
      }
    })
    await next()
  }
}
