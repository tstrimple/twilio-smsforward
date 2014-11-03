
var twilio = require('twilio');
var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', function (req, res) {
  var resp = new twilio.TwimlResponse();
  req.body.message
  resp.message({ to: process.env.TO_NUMBER }, req.body.From + ': ' + req.body.Body);
  res.writeHead(200, {
    'Content-Type':'text/xml'
  });
  res.end(resp.toString());
});

app.listen(process.env.PORT || 3000);
