/* eslint-disable no-console */

// set your api secret
var convertapi = require('../lib')(process.env.CONVERT_API_SECRET);

// Retrieve user information
// https://www.convertapi.com/doc/user

convertapi.user().then(function(info) {
  console.log("Name: " + info.FullName);
});