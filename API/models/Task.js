var mongoose = require('mongoose')

var taskSchema = mongoose.Schema({
    name: String,
    description: String,
    deadline: Date,
    important: Boolean,
    finished: Boolean
})

var Task = mongoose.model('tasks', taskSchema)

module.exports = Task