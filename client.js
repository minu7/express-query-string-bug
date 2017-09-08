let fetch = require('isomorphic-fetch');
let qs = require('qs');

let data = [];
for (let i = 22; i < 50; i += 1) {
  data.push(i);
}

let params = {
  currentDatasets: data
}

const stringifiedParams = qs.stringify(params);
var url = "http://localhost:9090?" + stringifiedParams;
console.log(url);
fetch(url, {
  method: 'GET',
  params: data
}).then(function(data) {
    console.log('request succeeded with JSON response')
  }).catch(function(error) {
    console.log('request failed', error)
  });
