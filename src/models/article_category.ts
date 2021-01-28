import { Sequelize, DataTypes } from 'sequelize'

export default (sequelize: Sequelize) => {
  return sequelize.define('ArticleCategory', {
    article: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Article',
        key: 'id'
      }
    },
    category: {
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
