var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require("path");

app.use('/', express.static(__dirname + '/dist/'));
app.use('/images', express.static(__dirname + '/images'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

http.listen(8080, "0.0.0.0", function(){
  console.log('listening on *:8080');
});
