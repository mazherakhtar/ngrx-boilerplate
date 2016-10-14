
var express = require('express');
var cors = require('cors');
var app = express();
var todos = [];
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

// GET http://localhost:4000/todos
app.get('/todos', function (req, res) {
    res.send(todos);
});

// POST http://localhost:4000/todos
app.post('/todos', function(req, res) {
    var id = Math.floor((Math.random() * 100000) + 1);
    var todo = {id: id, description: req.body.description, isCompleted: req.body.isCompleted}
    todos.push(todo);
    res.send(todo);
});

// PUT http://localhost:4000/todos/:id
app.put('/todos/:id', function(req, res) {
  var id = req.param('id');
  var filteredTodos = todos.filter(t => t.id == id);
  filteredTodos[0].isCompleted = !filteredTodos[0].isCompleted
  res.sendStatus(200);
});

// DELETE http://localhost:4000/todos/:id
app.delete('/todos/:id', function(req, res) {
  var id = req.param('id');
  todos = todos.filter(t => t.id != id);
  res.sendStatus(200);
});

app.listen(4000, function () {
    console.log('Todos app listening on port 4000!');
});