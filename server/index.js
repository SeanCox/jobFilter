// server
const express = require('express')
const app = express()
const routesMain = require('./routes.main.js')

app.use('/', routesMain)

const port =  process.env.PORT || 1337
app.listen(port, ()=>{
  console.log(`jobFilter listening on ${port}`)
})

// database
const keys = require('./_keys')
const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect(`mongodb://${keys.dbUsername}:${keys.dbPassword}@ds133438.mlab.com:33438/jobfilter`)
db.on('error', console.error.bind('connection error:'))
db.once('open', () => {
	console.log('database connection established')
})
