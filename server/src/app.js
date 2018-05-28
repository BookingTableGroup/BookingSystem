const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force: true}).then(() => {
  app.listen(config.port)
  console.log(`Server starts on port ${config.port}`)
})
// var server = app.listen((process.env.PORT || 8081), function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log('应用启动，地址为 http://%s:%s', host, port)
// })
