const mongoose = require('mongoose');

mongoose.connect('Add your own mongoDb URL here');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    Todo
};

