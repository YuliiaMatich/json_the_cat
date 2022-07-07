const arg = process.argv[2];
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  if (response.statusCode === 404) {
    console.log("page not found");
  }
  if (data.length === 0) {
    console.log("breed not found");
  } else {
    console.log('data', data[0].description);
    console.log(typeof body);
  }

});
