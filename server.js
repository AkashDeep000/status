 require('dotenv').config()
 
 const express = require('express')
 const app = express()
 const bodyParser = require('body-parser')
 
 const indexRouter = require('./routes/index')
 
 app.set('view engine', 'ejs')
 app.set('views' , __dirname + '/views')
 app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

 const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL , {useUnifiedTopology: true , useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


 app.use(express.static('public'))

 app.use('/', indexRouter)
 app.listen(process.env.PORT || 8080) 