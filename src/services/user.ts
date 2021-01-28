import Service from '@/common/service'

class UserService extends Service {
  /**
   * 获取登录用户
   */
  getLoginUser(account: string, password: string) {
    return this.models.User.findOne({
      where: {
        account,
        password
      },
      attributes: {
        exclude: ['password', 'deletetime']
      }
    })
  }
  /**
   * 保存用户
   */
  saveUser(data: unknown) {
    const user = this.models.User.build(data)
    return user.save()
  }
}

export default UserService
