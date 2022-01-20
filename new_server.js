var express = require('express');
var socket = require('socket.io');

//---------------------------------------------//

const INDEX = '/index.html';
const PORT = process.env.PORT || 3000;

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, "0.0.0.0", () => console.log(`Listening on ${PORT}`));

//socket set up

var io = socket(server);
var io = require("socket.io")(server, {
  cors: {
    'Access-Control-Allow-Origin': "*",
    'methods': ["GET", "POST"]
  }
});

io.on('connection', function(socket){
	console.log('made socket connection');
	socket.on('chat', function(data){
		
		io.sockets.emit('chat', data);
		//console.log('broadcasted message : ' + data.message);
	});
})

io.on('disconnect', ()=>{
    console.log('disconnected from user');
});