const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

var soln = {
          1 : 'ayy',
          2 : 'lmao'
        };
app.use(bodyParser.json());

app.get('/',
  (req, res) => {
    res.sendFile(path.join(__dirname + '/static/1.html'))
  });

app.post('/:problem', (req, res) =>
  {
    var problemNum = req.params.problem
    var userInput = req.body.answer
    //console.log(problemNum)
    if(soln[problemNum] == userInput) {
      res.sendFile(path.join(__dirname + '/static/' + (parseInt(problemNum)+1) + '.html'))
      res.status(202)
    }
    else {
      res.redirect('back');
      res.status(420)
    }
  });

app.listen(3000, () => console.log('Example app listening on port 3000!'));
