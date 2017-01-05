const express = require('express')
const router = express.Router()
const controller = require('./controller.jobs')

router.use('/test', (req, res) => {
  res.status(400).send('test route')
})

router.use('/search', (req, res) => {

})

router.use('/createJob', (req, res) => {
  controller.createJob(req, res)
})

module.exports = router
