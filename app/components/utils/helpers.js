// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");
// Geocoder API
// Helper functions for making API Calls
var helpers = {
    // This function posts new articles to our database.
    saveUser: function() {
        return axios.post("/login", {
            firstName: 'ariene4',
            lastName: 'ellefsen4',
            emailAddress: 'email4@email.com'
        });
    }
};
// We export the API helper
module.exports = helpers;