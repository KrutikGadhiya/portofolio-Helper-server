const express = require('express')
const router = express.Router()
const topModel = require('../models/top')

router.get('/top', async (req, res) => {
  try {
    const result = await topModel.find()
    res.json(result)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: "Some error Occured" })
  }
})

router.post('/topmany', async (req, res) => {
  const { ids } = req.body
  try {
    const propjects = ids.map((id) => ({ project: id }))
    topModel.insertMany(propjects, (err, docs) => {
      if (err) {
        return console.error(err);
      } else {
        console.log(docs)
        console.log("Multiple documents inserted to Collection");
        res.json({ message: "done" })
      }
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Some error Occured" })
  }
})

router.post('/top', async (req, res) => {
  const { id } = req.body
  try {
    const newTop = new topModel({
      project: id
    })
    const result = await newTop.save()
    res.json({ message: "done" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Some error Occured" })
  }
})

router.delete('/top/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const deleted = await topModel.findOneAndDelete({ project: id })
    if (deleted == null) return res.status(404).json({ message: "does not exist" })
    res.json({ message: "deleted successfully" })
    console.log(deleted)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Some error Occured" })
  }
})

module.exports = router