

var friends = require('../data/friends.js');
var path = require('path');

//Routing

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        //friends.push(req.body);

        var surveyData = req.body;
        var temp = [];
        var match = {};

        friends.forEach(function (element) {

            var obj = {};
            var scores = element.scores;
            var arr = [];

            for (var i = 0; i < scores.length; i++) {
                arr.push(Math.abs(scores[i] - surveyData.scores[i]));
            }

            obj.name = element.name;
            obj.photo = element.photo;
            obj.score = getSum(arr);

            temp.push(obj);


        })

        var found = getMatch(temp);
        res.json(found);
        //console.log("all friends:", temp);
        console.log("possible match:", found);


    })



};


function getMatch(list){
    Array.prototype.hasMin = function(attrib) {
        return this.reduce(function(prev, curr){ 
            return prev[attrib] < curr[attrib] ? prev : curr; 
        });
     }

     return list.hasMin("score");

}
function getSum(arr) {
    var total = 0;
    for (var i in arr) { total += parseInt(arr[i]); }
    return total;
}