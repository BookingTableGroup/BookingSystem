module.exports = {
  port: process.env.PROT || 8081,
  db: {
    database: process.env.DB_NAME || 'xifen',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './xifen.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECret || 'secret'
  }
}