var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const mongoose = require('mongoose')

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'take out the garbage'}]



module.exports = function(app){

  // Connect to the database (mlab.com)
  mongoose.connect('mongodb://test:test@ds159024.mlab.com:59024/aldoso-todo')

  // Create a schema - this is like a blueprint
  const todoSchema = new mongoose.Schema({
    item: String
  })

  var Todo = mongoose.model('Todo', todoSchema)
  var itemOne = Todo({item: 'buy something'}).save(function(err){
    if(err) throw err
    console.log('item saved')
  })

  app.get('/', function(req, res){
    //get data from mongodb and pass it to view
    Todo.find({}, function(err, data){
      if(err) throw console.error();
      res.render('todo', {todos: data})
    })
  })

  app.post('/', urlencodedParser, function(req, res){
    //get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err
      // data.unshift(req.body)
      res.json(data)
    })
  })

  app.delete('/:item', function(req, res){
    //delete the requested item from mongodb
      Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
        if(err) throw err
        res.json(data)
      })
    })
}
