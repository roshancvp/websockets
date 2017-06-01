var express = require('express');
var socket = require('socket.io');

var app = express();
app.use(express.static('public'));
var server = app.listen(3000);
console.log('Server running on port 3000...')

var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection: ' + socket.id);

  socket.on('mouse', mouseMsg);
  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    console.log(data);
  }

}
