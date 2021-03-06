import {
  Sequelize,
  DataTypes,
  Model
} from 'sequelize'

export declare class ArticleCategoryModel extends Model {
  id: number
  articleId: number
  categoryId: number
}

export default (sequelize: Sequelize) => {
  return sequelize.define<ArticleCategoryModel>('ArticleCategory', {
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Article',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  }, {
    tableName: 'article_category'
  })
}
