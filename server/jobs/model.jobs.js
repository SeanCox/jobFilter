const express = require('express')
const mongoose = require('mongoose')


const Schema = mongoose.Schema

const jobSchema = new Schema({
	title: String,
	company: String,
	city: String,
	skills: Array,
	contact: String,
  discription: String,
})

const Job = mongoose.model('Job', jobSchema)

function saveToDataBase(record){
  record.save((err, job) => {
    if(err) return console.log(err)
    console.log(`saved a job`)
  })
}

function createJob(title, company, city, skills, discription){
  const job = new Job({
    title,
    company,
    city,
    skills,
    discription
  })
  saveToDataBase(job)
  return true
}
// console.log(createJob(`testS`, `WB`, `LA`, [`A`,`F`], `job is GREAT`))




module.exports = {createJob, Job}
