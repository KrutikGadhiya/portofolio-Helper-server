const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// routes
app.use(require('./routes/save'));
app.use(require('./routes/getProject'))

app.get('/', (req, res) => {
  res.json();
})

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})