const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().regex(
        new RegExp('^[0-9]{11}$')
      ),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: '必须输入有效的手机号码'
          })
          break
        case 'password':
          res.status(400).send({
            error: `密码应符合以下条件:
              <br>
              1. 仅包含大小写字母、数字.
              <br>
              2. 长度应大于等于8位小于等于32位
            `
          })
          break
        default:
          res.status(400).send({
            error: '注册信息出错'
          })
      }
    } else {
      next()
    }
  }
}
