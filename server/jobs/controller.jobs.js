const Jobs = require('./model.jobs')

module.exports = {
  createJob : (req, res) => {
    if(Jobs.createJob(`testS`, `WB`, `LA`, [`A`,`F`], `job is GREAT`)){
      res.status(400).send('record created?')
    }

  }
}
