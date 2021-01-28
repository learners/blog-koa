const config = {
  db: {
    dialect: 'mysql',
    database: 'blog',
    host: '39.108.191.104',
    port: 3306,
    user: 'root',
    password: process.env.PASS,
    pool: {
      max: 10 // 最大连接数
    }
  },
  redis: {
    host: '39.108.191.104',
    port: 6379,
    password: process.env.PASS,
    keyPrefix: ''
  },
  appKeys: ['$2b$10$rWhg3YvEldURJ9.IvJm5AO'],
  // 默认哈希盐值
  defaultHashSalt: '$2b$10$SuIOb4v/frV.BOxd1G/dSu'
}

export = config
