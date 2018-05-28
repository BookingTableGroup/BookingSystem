const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// 哈希掉密码值
function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      console.log('哈希值为: ')
      console.log(hash)
      console.log('密码值为: ')
      console.log(user.password)
      user.setDataValue('password', hash)
    })
}

// 创建相当于用户的一个model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    console.log('比较原型中密码值为 :' + password)
    console.log('比较原型this密码值为 :' + this.password)
    const isPasswordValid = bcrypt.compareSync(this.password, password)
    console.log('比较结果: ')
    console.log((isPasswordValid))
  }

  return User
}
