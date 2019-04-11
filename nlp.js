const http = require('http'); 
const url = require('url');


//this function will be called every time someone accesses the server
const server = http.createServer((request , response) =>{   
});

server.listen(1337, '127.0.0.1' , () => { // means look/listen to request on port 1337 from the given ip address
    console.log('im listening');
});

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = 'Your text to analyze, e.g. Hello, world!';

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the document
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;
    console.log(`Document sentiment:`);
    console.log(`  Score: ${sentiment.score}`);
    console.log(`  Magnitude: ${sentiment.magnitude}`);

    const sentences = results[0].sentences;
    sentences.forEach(sentence => {
      console.log(`Sentence: ${sentence.text.content}`);
      console.log(`  Score: ${sentence.sentiment.score}`);
      console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });