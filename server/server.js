const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send(
    // 'Hello world!'
    {
      error: 'Page not found.',
      name: 'Todo App v1.0'
    }
  );
});

app.get('/users', (req, res) => {
  res
    .status(200)
    .send([
        {
          name: 'Bambi',
          age: 25
        }, {
          name: 'Piku',
          age: 27
    }]);
});

app.listen(3000);
module.exports.app = app;
