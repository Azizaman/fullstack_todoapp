const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://azizamanaaa97:2s3354LUZe0BzSu7@cluster0.tyjfznw.mongodb.net/todo_app');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    Todo
};

