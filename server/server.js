const express = require('express');

var app = express();
const port = process.env.PORT || 3000 ; 

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Jame',
    age: 23
  },{
    name: 'Joe',
    age: 22
  }, {
    name: 'Nes',
    age: 23
  }]);
});
// GET /users
//Give users a name prop , age prop

app.listen(3000);
module.exports.app = app;