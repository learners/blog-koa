import Controller from '@/common/controller'

const utils = require('@/utils')

declare interface Query {
  [key: string]: string
}

class SignController extends Controller {
  /**
   * 登录
   */
  async signin() {
    const { username, password } = this.ctx.query as Query
    const user = await this.services.userService.getLoginUser(username, utils.hash(password))
    if (user) {
      this.ctx.session.user = user
      this.ctx.body = this.successModel(user.toJSON())
    } else {
      this.ctx.body = this.errorModel(this.errorModel.LOGIN_ERROR)
    }
  }

  /**
   * 注册
   */
  async signup() {
    const { username, password } = this.ctx.query as Query
    await this.services.userService.saveUser({
      account: username,
      password
    })

    this.ctx.status = 200
  }
}

export default SignController
