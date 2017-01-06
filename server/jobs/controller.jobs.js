const Jobs = require('./model.jobs')

module.exports = {
  createJob : (req, res) => {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    .on('end', () => {
    body = JSON.parse(Buffer.concat(body).toString());

    if(Jobs.createJob(body.title, body.company, body.city, body.skills, body.discription)){
      res.status(200).send('record created?')
      }
    })

  }
}
