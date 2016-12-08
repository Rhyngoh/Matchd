//Set your dependencies here.
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

//serve up assets folder and all content as static files from server to client.
app.use(express.static(path.join(__dirname,'app')));

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Import Routes.js and use this for all routing.
//var routes = require('./routes.js');
//app.use('/', routes);
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

//start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
