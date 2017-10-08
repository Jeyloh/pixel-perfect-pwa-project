const console = require('console');
const xhr = require('xhr');
const query = require('codec/query_string');
const base64 = require('codec/base64');

export default (request) => {
  const username = 'a6479eb7-f1c1-461a-8fef-6b9de76c973c';
  const password = 'hoDJatPTxuvF';

  const apiUrl = 'https://gateway.watsonplatform.net/language-translation/api/v2/translate';
  const lang = 'es';

  const queryParams = {
    source: "en",
    target: lang,
    text: request.message.text_en
  };

  const httpOptions = {
    headers: {
      Authorization: 'Basic ' +
      base64.btoa(username + ':' + password)
    }
  };

  return xhr.fetch(apiUrl + '?' + query.stringify(queryParams), httpOptions)
    .then(r => {
      request.message['text_' + lang] = r.body;

      return request.ok();
    }, e => {
      console.log(e);
    })
    .catch((e) => {
      console.error(e);
    });
};