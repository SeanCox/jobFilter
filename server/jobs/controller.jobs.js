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
    let body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    .on('end', () => {
      body = JSON.parse(Buffer.concat(body).toString())
      console.log(body)
    //req.expLevel
    //req.skills
    Jobs.Job.find()
    	.then(jobs => {
        //jobs.exp- filter jobs that have req.expLevel into array
        matches = []
        matches.push(jobs[0])
        matches.push(jobs[1])
        
        jobs.forEach(job => {
          let flag = true
          job.skills.forEach(skill => {
            console.log(body[skill])
            // if(body[skill] != true) flag = false;
          })
          if(flag) matches.push(job)
        })

        res.status(200).send(matches)
      })
    	.catch(err => console.log(err))
    })

  }
}
