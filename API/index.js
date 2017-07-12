const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongoDbConfig = require('./DBconfig.json')
const Task = require('./models/Task.js')

app.use(bodyParser.json())

mongoose.connect(mongoDbConfig.url)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

app.get('/', (req, res) => {
    res.send('What are you doing there?')
})

app.get('/tasks', (req, res) => {
    let finishedWanted = req.query.finished
    finishedWanted ? param = {"finished": true} : param = {"finished": false}
    Task.find(param, (err, tasks) => {
        res.send(tasks)
    })
})

app.get('/delete', (req, res) => {
    let reqId = req.query.deleteId
    Task.deleteOne({_id: reqId}, function (err) {})
})

app.post('/add', (req, res) => {
    var newTask = new Task({ _id: new mongoose.Types.ObjectId, name: req.body.name, description: req.body.description, deadline: req.body.deadline, important: req.body.important, finished: false })
    newTask.save()
})

app.get('/finish', (req, res) => {
    let reqId = req.query.finishId
    Task.findOne({ _id: reqId }, function (err, task) {
        task.finished = true
        task.save()
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})