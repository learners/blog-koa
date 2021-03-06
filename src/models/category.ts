import {
  Sequelize,
  DataTypes,
  Model
} from 'sequelize'

export declare class CategoryModel extends Model {
  id: number
  name: string
  status: string
}

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
