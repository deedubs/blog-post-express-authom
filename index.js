var express = require('express')
  , app = express.createServer(express.logger('dev'));

app.get('/', function(req, res) {
  res.send('Hello World');
});

var port = (process.env.PORT || 8000);

app.listen(port, function() {
  console.log('Listening @ http://localhost:%d', port);
});