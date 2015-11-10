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
// Champaign-Urbana, Illinois, USA
var champaign = [ '-88.45', '40.04', '-88.10', '40.19' ];
// Chicago
var chicago = [ '-87.79', '41.71', '-87.63', '42.02' ];
// San Francisco
var sanfran = ['-122.75', '36.8', '-121.75', '37.8'];
// NYC
var nyc = [ '-74', '40', '-73', '41' ];
// London
var london = [ '-0.18', '51.47', '-0.00', '51.55' ];
// Tokyo
var tokyo = [ '139.18', '35.36', '140.13', '35.93' ];

io.sockets.on('connection', function (socket) {
    var stream = T.stream('statuses/filter', { locations: champaign });
    stream.on('tweet', function (tweet) {
      io.sockets.emit('tweet', tweet);
    })
});

