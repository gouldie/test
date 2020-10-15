var express = require("express")
var path = require("path")
const { send } = require("process")
var app = express()

app.use(express.static(path.join(__dirname)))

app.get('/api/test', (req, res) => {
  console.log('get')
  return res.send('success')
})

app.post('/api/test', (req, res) => {
  console.log('post')
  return res.send('success')
})

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

var port = 8080;
app.listen(port)
console.log(`view app at http://localhost:${port}`)

exports = module.exports = app