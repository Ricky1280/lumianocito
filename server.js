// Copyright 2018 Google LLC.
// SPDX-License-Identifier: Apache-2.0

var express = require('express');
var app = express();

app.get("/", (req, res) => {
      if (req.header('Accept-Encoding').includes('br')) {
      console.log("you can do it tho")
  req.url = req.url + '.br';
  res.set('Content-Encoding', 'br');
  res.set('Content-Type', 'text/html; charset=UTF-8');
  res.sendFile(__dirname + "/public/views/index.html.br");
    } else {
  res.sendFile(__dirname + "/views/index.html");
    }
});

app.get("/public/indexstyles.css", (req, res) => {
  res.sendFile(__dirname + "/public/indexstyles.css");
    }
);

app.get('*.html', (req, res) => {
    if (req.header('Accept-Encoding').includes('br')) {
  req.url = __dirname + "/public/public" + req.url + '.br';
  res.set('Content-Encoding', 'br');
  res.set('Content-Type', 'text/html; charset=UTF-8');
  res.sendFile(req.url);
    } else {
      req.url = __dirname + "/public" + req.url
      res.sendFile(req.url);
    }
});


app.use(express.static('public'));

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
var listener = app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', listener.address().port + " " + server_port);
});

// var listener = app.listen(process.env.PORT || 5000, function() {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
