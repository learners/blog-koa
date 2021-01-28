/**
 * 服务层父类
 */
import sequelize from '@/utils/sequelize'
import { models } from '@/models'

class Service {
  protected sequelize: typeof sequelize
  protected models: typeof models

  constructor() {
    this.sequelize = sequelize
    this.models = models
  }
}

export default Service
