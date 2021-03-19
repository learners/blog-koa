/**
 * 控制层父类
 */
import type { App, CamelCase, Instances } from '@/types'
import * as Services from '@/services'
import SuperService from '@/common/service'
import utils = require('@/utils')

import { success, error } from './model'

class Controller {
  protected services: Instances<typeof Services>
  protected successJSON: typeof success
  protected errorJSON: typeof error
  protected ctx = {} as App.Context

  constructor() {
    // 返回 JSON 数据模型
    this.successJSON = success
    this.errorJSON = error
    // 设置服务层对象
    this.services = this.getServices()
  }

  /**
   * 设置请求或响应上下文对象
   */
  public setContext(ctx: App.Context) {
    this.ctx = ctx
    this.init()
  }

  /**
   * 初始化控制器
   */
  protected init() {}

  /**
   * 获取服务层对象
   */
  private getServices() {
    const services = {} as Instances<typeof Services>
    const keys = Object.keys(Services) as Array<keyof typeof Services>
    keys.forEach(key => {
      const Service = Services[key]
      // 是否为 SuperService 的子类
      if (Object.getPrototypeOf(Service) === SuperService) {
        const service = new Service()
        // 实例名以小写字母开头
        utils.set(services, `${key.charAt(0).toLowerCase()}${key.slice(1)}` as CamelCase<typeof key>, service)
      }
    })
    return services
  }
}

export = Controller
