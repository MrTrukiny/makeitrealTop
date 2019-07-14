const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  let numbers = '';
  for (let i = 1; i <= 50; i++) {
    i % 2 == 0
     ? numbers += `<p>${i} Soy Par!</p>\n`
     : numbers += `<p>${i} Soy Impar!</p>\n`
  }
  res.send(numbers);
})

app.listen(port, () => console.log(`Server running on port ${port}`));