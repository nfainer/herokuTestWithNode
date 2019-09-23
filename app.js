const express = require('express');
const path = require('path');
// const port = 3000;

const port = process.env.PORT || 3000

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log('at the home route')
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

// a forward slash is the home route (same as index.html)
app.get('/contact', (req, res) => {
  console.log('at the contact route')
  res.sendFile(path.join(__dirname + '/views/contact.html'));
})

app.get('/portfolio', (req, res) => {
  console.log
  res.send('on the portfolio page!');
})



app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});