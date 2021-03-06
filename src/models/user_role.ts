import {
  Sequelize,
  DataTypes,
  Model
} from 'sequelize'

export declare class UserRoleModel extends Model {
  id: number
  userId: number
  roleId: number
}

export default (sequelize: Sequelize) => {
  return sequelize.define<UserRoleModel>('UserRole', {
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
