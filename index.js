var express = require('express');
var socket = require('socket.io');

//App set up

var app = express();
var server = app.listen(4000, function(){
	console.log('listening on port 4000');
});

app.use(express.static('public'));

//socket set up

//var io = socket(server);
var io = require("socket.io")(server, {
  cors: {
    'Access-Control-Allow-Origin': "*",
    'methods': ["GET", "POST"]
  }
});

io.on('connection', function(socket){
	console.log('made socket connection', socket.id);
	socket.on('chat', function(data){
		
		io.sockets.emit('chat', data);
		console.log('broadcasted message : ' + data.message);
	});
})


