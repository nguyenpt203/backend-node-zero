const express = require('express')
const path = require('path')
require('dotenv').config();

const app = express()
console.log('PORT:', process.env.PORT);
console.log('HOST_NAME:', process.env.HOST_NAME);
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// config template engine

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Khai báo router
app.get('/', (req, res) => {
  res.send('Hello World! & Phung Thai Nguyen')
})

app.get('/abc', (req, res) => {
    res.send('ABC')
  })

  app.get('/nguyen', (req, res) => {
    // res.send('<h1>nguyen phung thai</h1>')
    res.render('example.ejs')
  }) 

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})