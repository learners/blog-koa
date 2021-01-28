import { Sequelize, DataTypes } from 'sequelize'
import utils from '@/utils'

export default (sequelize: Sequelize) => {
  return sequelize.define('User', {
    account: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
      set(password: string) {
        this.setDataValue('password', utils.hash(password))
      }
    },
    nickname: {
      type: DataTypes.STRING(20)
    },
    sex: {
      type: DataTypes.INTEGER
    },
    motto: {
      type: DataTypes.STRING(100),
      comment: '座右铭'
    },
    avatar: {
      type: DataTypes.STRING(100)
    },
    phone: {
      type: DataTypes.STRING(20)
    },
    email: {
      type: DataTypes.STRING(20),
      validate: {
        isEmail: true
      }
    },
    birthday: {
      type: DataTypes.DATE
    },
    remark: {
      type: DataTypes.STRING
    },
    status: DataTypes.STRING
  }, {
    tableName: 'user'
  })
}
