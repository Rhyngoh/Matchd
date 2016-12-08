//LOAD DATA
var friendData = require("../data/friends.js");

module.exports = function(app){
	//API get request to get friend data when user visits a page
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});
	//API post request to submit data into the friends.js 
	app.post("/api/friends", function(req, res){
		var matchesArray = [];
		for(var j = 0; j < friendData.length; j++){
			var score = 0;
	    	for(var i = 0; i < 10; i++){
	    		score += Math.abs(parseInt(req.body.score[i]) - friendData[j].score[i]);
	    	}
	    	matchesArray.push(parseInt(score));
		}
		var minMatch = Math.min.apply(null, matchesArray);
		var theMatch = matchesArray.indexOf(minMatch);
		res.json(friendData[theMatch]);
		friendData.push(req.body);
	});
};