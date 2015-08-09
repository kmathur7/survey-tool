var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('next question', function(){
    io.emit('nxtQ');
  });

});
// -- API --
app.post('/feedback', function (req, res) {

	console.log(req.body.text);
  	res.send('done!');

});




// -- code to start the server -- 
http.listen(3000, function(){
  console.log('listening on *:3000');
});

