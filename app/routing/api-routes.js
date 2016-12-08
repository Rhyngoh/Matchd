//LOAD DATA
var friendData = require("../data/friends.js");

module.exports = function(app){
	//API get request to get friend data when user visits a page
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});
	//API post request to submit data into the friends.js 
	app.post("/api/friends", function(req, res){
		friendData.push(req.body);
		res.json(true);
	});
};