import { Sequelize, DataTypes } from 'sequelize'

export default (sequelize: Sequelize) => {
  return sequelize.define('ArticleCategory', {
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
