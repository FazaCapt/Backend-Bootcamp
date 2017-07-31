// Cara pertama

/*
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

// =========== Cara ke 2

/*
var request = require('request');

request('http://www.google.com', function(error, response, body) {
    if(!error && response.statusCode == 200){
        console.log(body); // Show the html for the google homepage
    }
});
*/


var request = require('request');

request('http://wwww.googlajsdajsdmadmxakxse.com', function(error, response, body){
    if(error){
        console.log("something went wrong!");
        console.log(error);
    } else {
        if(response.statusCode == 200) {
            // things worked
            console.log(body);
        }
    }
});