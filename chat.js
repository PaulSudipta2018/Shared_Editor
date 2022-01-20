//make connection
var socket = io.connect('http://localhost:3000');

//Query DOM
var message = document.getElementById('message');
	//handle = document.getElementById('handle');
	//btn = document.getElementById('send');
	output = document.getElementById('output');
	
	
	
//Emit events
message.addEventListener('input', function(){
	socket.emit('chat', {
		message : message.value
	})
});

//Listen for events

socket.on('chat', function(data){
	var message1 = document.getElementById('message');
	console.log('received messsage : ' + data.message);
	message1.value = data.message;
	console.log('current messsage content : ' + data.message);	

});