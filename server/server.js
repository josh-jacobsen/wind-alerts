var express = require('express')
var path = require('path')

var app = express()

var PORT = process.env.PORT || 8080

// serve static files such as main.css
app.use(express.static(path.join(__dirname, '../static')))

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname, '../static/index.html'))
})

app.listen(PORT, function() {
  console.log('Production server running on port: ', PORT);
})
