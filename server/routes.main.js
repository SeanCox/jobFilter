const express = require('express')
const router = express.Router()

const users = require('./users/routes.users')

router.use('/', express.static('public'))
router.use('api/users', users)

router.use((req, res) => {
	res.status(404).send('Sorry that does not exist')
})

module.exports = router
