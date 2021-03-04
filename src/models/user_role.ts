import { Sequelize, DataTypes } from 'sequelize'

export default (sequelize: Sequelize) => {
  return sequelize.define('UserRole', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Role',
        key: 'id'
      }
    }
  }, {
    tableName: 'user_role'
  })
}
