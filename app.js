var express = require('express'),
    app = express(),
	server = require('http').createServer(app);
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get("/TicTacGame/index.html", function(req, res) {
	res.sendFile(path.join(__dirname, '../public/TicTacGame/', 'index.html'))
});
app.get("/Color%Game/index.html", function(req, res) {
	res.sendFile(path.join(__dirname, '../public/Color%Game/', 'index.html'))
});
app.get("/Hangman/index.html", function(req, res) {
	res.sendFile(path.join(__dirname, '../public/Hangman/', 'index.html'))
});
app.get("/Architecture_Website/index.html", function(req, res) {
	res.sendFile(path.join(__dirname, '../public/Architecture_Website/', 'index.html'))
});




var port = process.env.PORT || 3000;
server.listen(port, function() { 
  console.log('Server listening on port 3000'); 
 })