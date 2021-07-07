const express = require('express');
const project = require('../models/project');
const router = express.Router();

router.post('/save', (req, res) => {
  console.log(req.body);
  const {
    projectName,
    projectDescription,
    projectImage,
    projectLink,
    githubLink,
    technologies } = req.body;

  const proj = new project({
    projectName,
    projectDescription,
    projectImage,
    projectLink,
    githubLink,
    technologies
  })

  proj.save()
    .then((response) => {
      console.log("project saved");
      res.json({ message: `${projectName} saved` })
    })
    .catch((err) => {
      console.log(err);
    })
})

module.exports = router;