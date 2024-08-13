const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 6969
const path = require('path')
const hostname = 'localhost'
const configViewEngine=require('./config/viewEngine.js')
const webRoutes=require('./routes/web.js')
//config app
configViewEngine(app)

app.use('',webRoutes);
app.listen(port,hostname,() => {
  console.log(`Example app listening on port ${port}`)
})