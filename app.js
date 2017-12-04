const express = require('express')
const todoController = require('./controllers/todoController')


const app = express()

app.listen(process.env.PORT || 4000)
console.log('This app runs on http://localhost:4000')

app.set('view engine', 'ejs') //set template engine
app.use(express.static('./public/')) //static files


//fire controllers !!!!
todoController(app)
