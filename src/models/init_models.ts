import path from 'path'
import { Sequelize, ModelCtor, Model } from 'sequelize'

import type { ArticleModel } from './article'
import type { ArticleCategoryModel } from './article_category'
import type { CategoryModel } from './category'
import type { RoleModel } from './role'
import type { UserModel } from './user'
import type { UserRoleModel } from './user_role'

/**
 * 初始化所有模型
 * @param {Sequelize} sequelize Sequelize 实例对象
 */
function initModels(sequelize: Sequelize) {
  const load = <M extends Model>(name: string): ModelCtor<M> => require(path.join(__dirname, name)).default(sequelize)

  const Article = load<ArticleModel>('article')
  const ArticleCategory = load<ArticleCategoryModel>('article_category')
  const Category = load<CategoryModel>('category')
  const Role = load<RoleModel>('role')
  const User = load<UserModel>('user')
  const UserRole = load<UserRoleModel>('user_role')

  const models = {
    Article,
    ArticleCategory,
    Category,
    Role,
    User,
    UserRole
  }

  // 用户-文章 一对多关联
  User.hasMany(Article, { foreignKey: 'authorId' })
  Article.belongsTo(User, { foreignKey: 'authorId', as: 'author' })

  // 文章-分类 多对多关联
  Article.belongsToMany(Category, { through: ArticleCategory })
  Category.belongsToMany(Article, { through: ArticleCategory })

  // 用户-角色 多对多关联
  User.belongsToMany(Role, { through: UserRole })
  Role.belongsToMany(User, { through: UserRole })

  return models
}

export default initModels
