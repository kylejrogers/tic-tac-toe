var express = require('express');
var app = express();


app.use(express.static('public'));
app.get('/', function(req, res){
	res.sendFile('home.html', {root: 'public'});
});

app.listen(process.env.PORT || 3000, function(){
	console.log('Example app listening on port 3000!');
});