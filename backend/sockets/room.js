const uuid = require('node-uuid');

module.exports = function(app) {

  'use strict';

  const io = app.get('io');

  io.on('connection', function (socket) {
    socket.on('room:join', function({roomName, userName}, fn) {
      const cb = fn || function() {};

      if (!userName) {
        cb(null, 'User name is required');
      } else if (!roomName) {
        cb(null, 'Room name is required');
      } else {

        if (socket.roomName) {
          cb(); // socket is currently in room
        } else {
          socket.user = {
            cid: uuid.v4(),
            userName: userName,
          };

          socket.roomName = roomName;
          socket.join(socket.roomName);

          app.emit('socket:room:join', socket);

          cb();
        }
      }
    });

    socket.on('room:leave', function(fn) {
      const cb = fn || function() {};
      socket.leave(socket.roomName);
      app.emit('socket:room:leave', socket);
      cb();
    });

    socket.on('disconnect', function() {
      app.emit('socket:room:leave', socket);
    });
  });
};
