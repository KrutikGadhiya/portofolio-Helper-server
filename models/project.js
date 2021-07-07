const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  projectName: {
    type: String
  },
  projectDescription: {
    type: String
  },
  projectImage: {
    type: String
  },
  projectLink: {
    type: String
  },
  githubLink: {
    type: String
  },
  technologies: {
    type: []
  }
});

const projectModel = mongoose.model('ProjectModel', projectSchema);
module.exports = projectModel;