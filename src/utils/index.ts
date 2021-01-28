import bcrypt from 'bcrypt'
import config from '@/config'

export = {
  /**
   * 生成哈希值
   */
  hash(data: string, salt?: string | number) {
    return bcrypt.hashSync(data, salt ?? config.defaultHashSalt ?? bcrypt.genSaltSync())
  },
  /**
   * 设置对象指定键名的键值
   */
  set<T, K extends keyof T>(obj: T, key: K, val: T[K]) {
    obj[key] = val
  }
}
