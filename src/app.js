const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 6969
const path = require('path')
const hostname = 'localhost'

// Require static assets from public folder


app.set("views",path.join(__dirname,"views"))
console.log(__dirname);
app.set("view engine","ejs");



app.get('/', (req, res) => {
  res.send('Hello concac!')
})

app.get('/ejs', (req, res) => {
  res.render("sample")
})

app.listen(port,hostname,() => {
  console.log(`Example app listening on port ${port}`)
})