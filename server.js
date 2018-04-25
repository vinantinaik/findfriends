var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

var friends = require("./app/data/friends.js");

app.use(express.static(path.join(__dirname , 'app/public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var PORT = process.env.PORT || 3000;


require('./app/routing/appRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));

// })

// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));

// })




// app.get("/api/friends", function (req, res) {

//     return res.json(friends);
// })


// app.post("/api/friends", function (req, res) {

//     var surveyData = req.body;
//     var temp = [];
//     var match={};

//     friends.forEach(function (element) {

//         var obj = {};
//         var scores = element.scores;
//         var arr = [];

//         for (var i = 0; i < scores.length; i++) {
//             arr.push(Math.abs(scores[i] - surveyData.scores[i]));
//         }

//         obj.name = element.name;
//         obj.score = getSum(arr);

//         temp.push(obj);


//     })

//     res.json(temp);
//     console.log("Submitted data ", temp);

// })

// function getSum(arr) {
//     var total = 0;
//     for (var i in arr) { total += parseInt(arr[i]); }
//     return total;
// }


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

