const express = require('express');
const project = require('../models/project');
const router = express.Router();

router.get('/getproject', (req, res) => {
  project.find()
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "error fetching data" });
    })
})

module.exports = router