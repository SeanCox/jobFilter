const express = require('express')
const app = express()
const routesMain = require('./routes.main.js')

app.use('/', routesMain)

const port = 1337
app.listen(port, ()=>{
  console.log(`jobFilter listening on ${port}`)
})
