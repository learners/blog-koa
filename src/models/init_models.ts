import path from 'path'
import { Sequelize, ModelCtor, Model } from 'sequelize'

/**
 * 初始化所有模型
 * @param {Sequelize} sequelize Sequelize 实例对象
 */
function initModels(sequelize: Sequelize) {
  const load = (name: string): ModelCtor<Model> => require(path.join(__dirname, name)).default(sequelize)

  const Article = load('article')
  const ArticleCategory = load('article_category')
  const Category = load('category')
  const Role = load('role')
  const User = load('user')
  const UserRole = load('user_role')

  const models = {
    Article,
    ArticleCategory,
    Category,
    Role,
    User,
    UserRole
  }

  // 用户-文章 一对多关联
  User.hasMany(Article, { foreignKey: 'author' })
  Article.belongsTo(User, { foreignKey: 'author' })

  // 文章-分类 多对多关联
  Article.belongsToMany(Category, { through: ArticleCategory })
  Category.belongsToMany(Article, { through: ArticleCategory })

  // 用户-角色 多对对关系
  User.belongsToMany(Role, { through: UserRole })
  Role.belongsToMany(User, { through: UserRole })

  return models
}

export default initModels
