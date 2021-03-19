import type { App, CamelCase, Instances } from '@/types'
import utils = require('@/utils')
import * as Controllers from '@/controllers'
import SuperController from '@/common/controller'

/**
 * 将 controller 存储到 app 中
 * @param {App} app Koa实例对象
 */
export = (app: App) => {
  const controllers = {} as Instances<typeof Controllers>
  app.controllers = controllers

  const keys = Object.keys(Controllers) as Array<keyof typeof Controllers>
  keys.forEach(key => {
    const Controller = Controllers[key]
    // 是否为 SuperController 的子类
    if (Object.getPrototypeOf(Controller) === SuperController) {
      const controller = new Controller()
      const prototype = Object.getPrototypeOf(controller)
      // 存储 controller 实例
      utils.set(controllers, `${key.charAt(0).toLowerCase()}${key.slice(1)}` as CamelCase<typeof key>, controller)
      // 获取 prototype 中的方法名列表
      Object.getOwnPropertyNames(prototype).forEach(name => {
        const descriptor = Object.getOwnPropertyDescriptor(prototype, name)
        // 为实例方法绑定 controller 对象
        if (name !== 'constructor' && typeof descriptor?.value === 'function') {
          descriptor.value = descriptor.value.bind(controller)
          Object.defineProperty(controller, name, descriptor)
        }
      })
    }
  })

  return async (ctx: App.Context, next: App.Next) => {
    Object.keys(controllers).forEach(key => {
      const controller = controllers[key as keyof typeof controllers]
      // 设置请求或响应上下文对象
      controller.setContext(ctx)
    })
    await next()
  }
}
