var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
//var {spawn} = require('child_process');
var spawn = require("child_process").spawn;
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  app.use(express.static(path.join(__dirname + '/routes')));
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/runModel', function(req, res, next) {
  args = req.query.args;
  args = args.split("%");
  args.pop();

  var file = __dirname + '/../scripts/modelV3.py';
  args.unshift(file);
  var model = spawn('python3',args);
   model.stdout.on('data', function (data) {
     console.log(data.toString('utf8'));
   });

  model.stdout.on('close', (code) => {
    console.log("done");
    app.use(express.static(path.join(__dirname + '/routes')));
    res.sendFile(path.join(__dirname + '/infectedPlot.html'));
  });
});

module.exports = router;
