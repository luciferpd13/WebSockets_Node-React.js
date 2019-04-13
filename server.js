var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');


app.use(bodyParser.json());


io.on('connection', function(socket,) {
     console.log('Connected to Server');
    app.post('/send', (req, res) => {
         io.sockets.emit('broadcast',{ from: req.body.from, text: req.body.text });
        res.send('Recieved')
});
});

io.on('disconnect', function() {
    console.log('Socket disconnected');
  });

http.listen(5000, function() {
   console.log('listening on localhost:3000');
});