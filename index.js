var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Datastore = require('nedb');
var db = {};
db.questions = new Datastore('./db/questions.db');
db.responses = new Datastore('./db/responses.db');
db.questions.loadDatabase();
db.responses.loadDatabase();



var usercounter = 0;
var questionno = 0;

io.on('connection', function(socket){
  usercounter++;
  io.emit('connected users',usercounter);
  socket.on('disconnect', function(){
    usercounter--;
    io.emit('connected users',usercounter);
  });

  socket.on('next question', function(value){
  	questionno = value;
    io.emit('nxtQ');
  });

  socket.on('answered', function(){
    io.emit('incrementcount');
  });

});
// -- API --
app.post('/feedback', function (req, res) {

	var data = {
		question_no:questionno,
		response:req.body.text
	};	
	db.responses.insert(data,function(err,newResponses){
	});
  	res.send('done!');

});

app.get('/results',function (req,res){
	db.responses.find({},function(err,docs){
		res.send(docs);
	})
});
app.get('/getquestions',function (req,res){
	db.questions.find({},function(err,docs){
		res.send(docs);
	})
});

app.post('/addquestion',function (req,res){
	var question = {
		question:req.body.question,
		options:{
			a:req.body.a,
			b:req.body.b,
			c:req.body.c,
			d:req.body.d,
			e:req.body.e
		}
	};
	db.questions.insert(question,function(err,newQuestions){
	});
	res.send('done!');
});



// -- code to start the server -- 
http.listen(3000, function(){
  console.log('listening on *:3000');
});

