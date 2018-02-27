const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

var soln = {
          1 : '3 8 2 5 s 1 9 s',
          2 : '8 8 8 2 2 5 5 6 8 8 8 2 2 5 5 6 -1 9999999 1 1 2 2 999 998 997 996 995 994 993 992 991 990 5 9 8 7 6 5 4 3 2 1 0 2 2 2 1 1 1 8 8 8 4',
          3 : '2 80 n 0 15 1 16 2 17 3 18 4 19 n 1 41 3 43 40 80 50 90 63 103'
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static/'));
app.get('/',
  (req, res) => {
    res.sendFile(path.join(__dirname + '/static/1.html'));
});

app.get('/:problem', (req, res) => {
  var problemNum = req.params.problem;
  res.sendFile(path.join(__dirname + '/static/' + (parseInt(problemNum)+1) + '.html'));
});

app.post('/:problem', (req, res) =>
{
    var problemNum = req.params.problem;
    var userInput = req.body.answer;
    console.log(problemNum);
    console.log(req.body.answer);
    //console.log(problemNum)
    if(soln[problemNum] == userInput) {
      res.sendFile(path.join(__dirname + '/static/' + (parseInt(problemNum)+1) + '.html'));
      res.status(202);
    }
    else {
      res.redirect('back');
      res.status(420);
    }
  });

app.listen(3000, () => console.log('Example app listening on port 3000!'));
