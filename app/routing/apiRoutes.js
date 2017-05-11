
var friends = require('../data/friends.js');


module.exports = function (app) {

	app.get("/api/friends", function (req, res) {
		return res.json(friends);
	});

	 app.post("/api/friends", function(req, res) {
  
    var newFriend = req.body;

  data.friends.push(newFriend);

  res.json(data.friends);

  console.log(newFriend);

  });

// 	app.get("/api/waitlist", function (req, res) {
// 		return res.json(waitingArray);
// 	});
// /////////////////////////////////////////////////
// app.get("/api/tables/:customerName", function(req, res) {
// 	var chosen = req.params.customerName;
// 	console.log(chosen);

// 	for (var i = 0; i < tableArray.length; i++) {
// 		if (chosen === tableArray[i].customerName) {
// 			return res.json(tableArray[i]);
// 		}
// 	}
// 	return res.send("No customer table found...");
// });
// app.get("/api/waitlist/:customerName", function(req, res) {
// 	var chosen = req.params.customerName;
// 	console.log(chosen);

// 	for (var i = 0; i < waitingArray.length; i++) {
// 		if (chosen === waitingArray[i].customerName) {
// 			return res.json(waitingArray[i]);
// 		}
// 	}
// 	return res.send("No waiting customer found...");
// });
// 	////////////////////////////////////////////////

// 	// app.post("api/newtable", function(req, res){
// 	// 	var newTable = req.body;
// 	// 	newTable.customerName = newTable.customerName.replace(/\s+/g, "").toLowerCase();
// 	// 	tableArray.push(newTable);
// 	// 	res.json(newTable);
// 	// });

// 	app.post('/api/newtable', function(req, res) {
//         var newTable = req.body;
//         newTable.customerName = newTable.customerName.replace(/\s+/g, "").toLowerCase();
//         tableArray.push(newTable);
//         res.json(newTable);
//     });
}