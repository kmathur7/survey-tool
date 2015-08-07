var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));





// -- code to start the server -- 
var server = app.listen(3000, function () {
	var host = server.address().address
  	var port = server.address().port
	console.log('Backend server listening at http://%s:%s', host, port)
});

