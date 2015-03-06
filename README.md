# twitter-streaming-socketio
Example ExpressJS application that uses SocketIO and Bootstrap to show a steady stream of nearby tweets

## Setup

This project uses the [twit](https://github.com/ttezel/twit) NPM module to utilize the Twitter Streaming API, so you will need to register a new app at [apps.twitter.com](https://apps.twitter.com/app/new) and get a consumer key and access token (this is free).

Once you have an app registered with Twitter, create a file called `config.js` in the project root (this is already gitignored) add the following keys:

```
module.exports = {
    consumer_key: 'REQUIRED'
  , consumer_secret: 'REQUIRED'
  , access_token: 'REQUIRED'
  , access_token_secret: 'REQUIRED'
}

```

Once you have your keys and tokens in your `config.js`, you're ready to start the application:
```
npm install
bower install
npm start
```
The application can be viewed at [http://localhost:3000](http://localhost:3000)

## Customize

When you first start this application, you will see tweets from Champaign, Illinois. To see tweets near you, update `index.js` to the coordinates of your location. 

Twitter expects this to be an array of coordinates, starting in the Southwest corner, and ending in the Northeast corner ([more info on dev.twitter.com](https://dev.twitter.com/streaming/overview/request-parameters#locations)). You can also use [geojson.io](http://geojson.io)
  to easily identify nearby coordinates.
  
Note that this is a single array with four elements, not a polygon or nested array of points. Several sample locations are provided.
  
```
// Champaign-Urbana, Illinois, USA
var location = [ '-88.45', '40.04', '-88.10', '40.19' ];

// Chicago
var location = [ '-87.79', '41.71', '-87.63', '42.02' ];

// San Francisco
var location = [ '-88.45', '40.04', '-88.10', '40.19' ];

// NYC
var location = [ '-74.02', '40.69', '-73.93', '40.79' ];

// London
var location = [ '-0.18', '51.47', '-0.00', '51.55' ];

// Tokyo
var location = [ '139.18', '35.36', '140.13', '35.93' ];

```

