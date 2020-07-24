var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(3000,function(){
	console.log("App running at port 3000...");
})
app.get('/teacher', function(req, res){
	res.sendFile(__dirname + '/teacher.html');
})
app.get('/student', function(req, res){
	res.sendFile(__dirname + '/student.html');
})

io.on('connection', function(socket){
  socket.on('question', function(data){
	  console.log(data);
    io.emit('question', data);
  });
  
  socket.on('answer', function(data){
	console.log(data);
    io.emit('answer', data);
  });
});
