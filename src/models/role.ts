import { Sequelize, DataTypes } from 'sequelize'

export default (sequelize: Sequelize) => {
  return sequelize.define('Role', {
    code: {
      type: DataTypes.STRING(20)
    },
    name: {
      type: DataTypes.STRING(20)
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'role'
  })
}
