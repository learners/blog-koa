import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'

export default (sequelize: Sequelize) => {
  return sequelize.define('Article', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    content: {
      type: new DataTypes.TEXT('long'),
      allowNull: false
    },
    authorId: {
      type: DataTypes.INTEGER,
      field: 'author_id'
    },
    status: {
      type: DataTypes.STRING
    },
    pubtime: {
      type: DataTypes.VIRTUAL,
      get() {
        return moment(this.getDataValue('createtime')).format('YYYY-MM-DD')
      }
    }
  }, {
    tableName: 'article'
  })
}
