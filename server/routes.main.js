const express = require('express')
const router = express.Router()

const users = require('./users/routes.users')
const jobs = require('./jobs/routes.jobs')

router.use('/', express.static('public'))
router.use('/api/users', users)
router.use('/api/jobs', jobs)

router.use((req, res) => {
	res.status(404).send('Sorry that does not exist')
})

// Start mongoose test
const keys = require('./_keys')
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${keys.dbUsername}:${keys.dbPassword}@ds133438.mlab.com:33438/jobfilter`)

const db = mongoose.connection
db.on('error', console.error.bind('connection error:'))
db.once('open', () => {
	console.log('database connection established')
})

const Schema = mongoose.Schema

const jobSchema = new Schema({
	title: String,
	company: String,
	city: String,
	skills: Array,
	exp: Number
})

const Job = mongoose.model('Job', jobSchema)

const testJob = new Job({
	title: 'Test Job',
	company: 'test corp',
	city: 'Los Angeles',
	skills: ['javascript', 'css', 'html'],
	exp: 1
})

testJob.save((err, job) => {
	if(err) return console.log(err)
	console.log(`saved test job`)
})




// End mongoose test
module.exports = router
