import type { App } from '@/types'
import Controller from '@/common/controller'

const utils = require('@/utils')

class SignController extends Controller {
  account = ''
  password = ''

  init() {
    const { username: account, password } = this.ctx.query
    this.account = <string>account
    this.password = <string>password
  }

  /**
   * 登录
   */
  async signin() {
    const user = await this.services.userService.getLoginUser(this.account, utils.hash(this.password))
    if (user) {
      this.ctx.session.user = user
      this.ctx.body = this.successJSON(user.toJSON())
    } else {
      this.ctx.body = this.errorJSON()
    }
  }

  /**
   * 注册
   */
  async signup() {
    await this.services.userService.saveUser({
      account: this.account,
      password: this.password
    })

    this.ctx.status = 200
  }
}

export default SignController
