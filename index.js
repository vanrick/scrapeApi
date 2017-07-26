const fs = require('fs');
const request = require('request');

let url = process.argv[2];
let fileName = process.argv[3]

request(url, (error, response, body) => {
  if (error) return console.error(error);
  if (response && response.statusCode == 200) {
    fs.writeFile(fileName + '.html', body, (error) => {
      if (error) return console.error(error);
    })
    fs.writeFile(fileName + '.json', '{"name": "example"}', (error) => {
      if (error) return console.error(error);
    })
  }
});
