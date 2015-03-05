var express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , path = require('path')
    , Twit = require('twit')
    , io = require('socket.io').listen(server)
    , config = require('config');
    
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res) {
  res.render('index', {msg: 'Twitter Streaming API Demo'})
});

server.listen(3000);

var T = new Twit(config);

// https://dev.twitter.com/streaming/overview/request-parameters#locations
var location = [ '-88.45', '40.04','-88.10', '40.19' ];

io.sockets.on('connection', function (socket) {
    var stream = T.stream('statuses/filter', { locations: location });
    stream.on('tweet', function (tweet) {
      io.sockets.emit('tweet', tweet);
    })
});

