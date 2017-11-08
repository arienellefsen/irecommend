const User = require("../models/User.js");

module.exports = function(app) {

    app.get('/test', function(req, res) {
        console.log('test');
    });

    // This is the route we will send POST requests to save each search.
    app.post("/login", function(req, res) {
        console.log("BODY: " + req.body);
        // Here we'll save the location based on the JSON input.
        // We'll use Date.now() to always get the current date time
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress
        }, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.send("Saved User");
            }
        });
    });

}