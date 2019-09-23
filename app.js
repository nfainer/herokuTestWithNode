const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
})


app.get('/contact'. (req, res) => {
  res.send('on the contact page!');
})



server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});