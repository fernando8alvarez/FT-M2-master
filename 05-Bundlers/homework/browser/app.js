//(function () {

  //var whiteboard = window.whiteboard;
  //var socket = window.io(window.location.origin);

  let whiteboard = require('./whiteboard.js');// Importamos lo exporta whiteboard
  let io = require('socket.io-client');// Importamos la libreria io
  let socket = io(window.location.origin);//ejecutamos el metodo que nos da esa libreria

  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });


//})();
