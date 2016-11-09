var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
	console.log("I recieved a GET request");

	db.contactlist.find(function(err, docs){
		res.json(docs);
	});
});

app.post("/contactlist", function(req, res){
	db.contactlist.save(req.body, function(err,docs){
		res.json(docs);
	});
});

app.delete('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.listen(3000);
console.log("Server running on port 3000");