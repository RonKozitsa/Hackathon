'use strict';

let https = require('https');
const http = require('http');
const bodyParser = require("body-parser");
var express = require('express');

const app = express();
const port = 4000;
let body = '';
let accessKey = '1e0346577e81416ba5a43f8ea1d9ba0b';
let uri = 'westcentralus.api.cognitive.microsoft.com';
let path = '/text/analytics/v2.0/sentiment';
let documents = {
	'documents': [
		{ 'id': '1', 'language': 'en', 'text': `hi` },
		{ 'id': '2', 'language': 'es', 'text': 'Este ha sido un dia terrible, llegué tarde al trabajo debido a un accidente automobilistico.' },
	]
};

app.get('/', (req, res) => res.send('Hello World!'))

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/", function (req, res) {
    
get_sentiments(documents);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let response_handler = function (response) {
	let body = '';
	response.on('data', function (d) {
		body += d;
	});
	response.on('end', function () {
		let body_ = JSON.parse(body);
		let body__ = JSON.stringify(body_, null, '  ');
		console.log (body__);
	});
	response.on('error', function (e) {
		console.log('Error: ' + e.message);
	});
};

let get_sentiments = function (documents) {
	let body = JSON.stringify(documents);

	let request_params = {
		method: 'POST',
		hostname: uri,
		path: path,
		headers: {
			'Ocp-Apim-Subscription-Key': accessKey,
		}
	};

	let req = https.request(request_params, response_handler);
	req.write(body);
	req.end();
}
