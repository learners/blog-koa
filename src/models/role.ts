import {
  Sequelize,
  DataTypes,
  Model
} from 'sequelize'

export declare class RoleModel extends Model {
  id: number
  code: string
  name: string
  status: string
}

export default (sequelize: Sequelize) => {
  return sequelize.define<RoleModel>('Role', {
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
