const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: '邮箱地址格式有问题'
          })
          break
        case 'password':
          res.status(400).send({
            error: '密码填写有问题，长度为8-32位，包含大小写字母和数字'
          })
          break
        default:
          res.status(400).send({
            error: '填写的注册信息有误'
          })
      }
    } else {
      console.log(`AuthenticationControllerPolicy的输出值为 : ${value}`)
      next()
    }
  }
}
