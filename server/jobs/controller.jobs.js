const Jobs = require('./model.jobs')

module.exports = {
  createJob : (req, res) => {
    let body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    .on('end', () => {
    body = JSON.parse(Buffer.concat(body).toString())

    if(Jobs.createJob(body.title, body.company, body.city, body.skills, body.discription)){
      res.status(200).send('record created?')
      }
    })
  },

  searchJobs : (req, res) => {
    //get all jobs
    //has all skills (job seeker skils, array of jobs){
    // matches = []
    // for each array of jobs where seeker has all of job skills push to matches
    //}

    	Jobs.Job.find()
    	.then(jobs => res.status(200).send(jobs))
    	.catch(err => console.log(err))

  }
}
