const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json());

// routes
app.use(require('./routes/save'));
app.use(require('./routes/getProject'))

app.get('/', (req, res) => {
  res.json({ message: "server Up and running" });
})

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})