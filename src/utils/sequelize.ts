import { Sequelize } from 'sequelize'

const debug = require('debug')('sequelize:*')
const { db } = require('@/config')

const sequelize = new Sequelize({
  dialect: db.dialect,
  database: db.database,
  host: db.host,
  port: db.port,
  username: db.user,
  password: db.password,
  pool: { // 数据库连接池
    idle: 10000, // 闲置连接释放时间 单位毫秒
    evict: 1000, // 闲置连接从连接池移除的时间间隔 单位毫秒
    ...db.pool
  },
  define: {
    underscored: true,
    freezeTableName: true, // 强制表名称与模型名称一致
    paranoid: true, // 启用软删除操作
    timestamps: true, // 自动设置操作时间
  },
  timezone: '+08:00',
  logging: msg => debug(msg)
})

export default sequelize
