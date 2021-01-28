import { Sequelize, DataTypes } from 'sequelize'

export default (sequelize: Sequelize) => {
  return sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'category'
  })
}
