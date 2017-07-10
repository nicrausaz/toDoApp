var express = require('express')
var app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.get('/', (req, res) => {
  res.send('What are you doing there?')
})

app.get('/tasks', (req, res) => {
  res.send('TASKS')
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