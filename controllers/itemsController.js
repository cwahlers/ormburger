var express = require("express");

var router = express.Router();

// 1 pm

// Import the model (item.js) to use its database functions.
var burgeritem = require('../models/item.js')

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burgeritem.all(function(data){
		res.render('items/index', {items: data});
	});
});

router.get("/new", function(req, res) {
	res.render('items/new');
});

router.post("/create", function(req, res){
	// res.send(req.body);
	//console.log("Burger: " + req.body.burger_name + "devoured: " + false);
	var cols = ['burger_name', 'devoured', 'createdAt', 'updatedAt' ];
	var vals = [req.body.burger_name, false, '2017-03-20 17:20:30', '2017-03-20 17:20:30' ];

	burgeritem.create(cols, vals, function(response){
		res.redirect('/items');
	});
})

router.post("/devour", function(req, res){

	var objColVals2 = { devoured: true };
	var cond = " id = " + req.body.id;

	burgeritem.update(objColVals2, cond, function(response){
		res.redirect('/items');
	});
})


router.post("/delete", function(req, res){
	
	var condition = " id = " + req.body.id;

	burgeritem.delete(condition, function(response){
		res.redirect('/items');
	});
})

// Export routes for server.js to use.
module.exports = router;

