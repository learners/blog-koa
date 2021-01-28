import sequelize from '@/utils/sequelize'
import initModels from './init_models'

// 初始化所有模型
const models = initModels(sequelize)

/**
 * 合并查询选项
 */
function mergeFindOptions(options = {}) {
  return options
}

export {
  models,
  mergeFindOptions
}
