const express = require('express');
const app = express();
const colors = require('colors');
var targetBaseUrl = process.env. REDIRECT_URL;


// const targetBaseUrl = 'https://dev.creditculture.sg';
function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl + '/#'+ req.originalUrl;
  console.log("original url",req.originalUrl);
  res.redirect(targetUrl);
  console.log ("redirect URL",targetUrl.green);
}
app.get('*', handleRedirect);
const port = process.env.port || 3001;
console.log ("listening on port:",port);
app.listen(port);