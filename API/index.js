const express = require('express')
const app = express()
const mongoDbConfig = require('./DBconfig.json')
const Task = require('./models/Task.js')
const mongoose = require('mongoose')

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
    res.send('delete')
})

app.get('/finish', (req, res) => {
    res.send('finish')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})