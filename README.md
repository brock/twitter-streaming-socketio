# twitter-streaming-socketio
Example ExpressJS application that uses SocketIO and Bootstrap to show a steady stream of nearby tweets

## Setup
```
npm install
bower install
```

## Customize
Update `index.js` to the coordinates of your location. Twitter expects this to be an array of coordinates, starting in the southwest corner, and ending in the northeast corner. You can use [geojson.io](http://geojson.io)
  to find coordinates near you.
  
```
// https://dev.twitter.com/streaming/overview/request-parameters#locations
var location = [ '-88.45', '40.04','-88.10', '40.19' ];
```
