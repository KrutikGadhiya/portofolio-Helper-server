const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const topSchema = mongoose.Schema({
  project: {
    type: ObjectId,
    ref: 'ProjectModel'
  }
})

const topModel = mongoose.model('TopModel', topSchema)
module.exports = topModel