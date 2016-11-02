var express = require('express');
var app = express();




//routes 
app.use(express.static( __dirname + '/app'));

app.get('/index.html', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/app/index.html'));
});

app.listen(4200, function () {
  console.log('App running on port 4200');
});
    