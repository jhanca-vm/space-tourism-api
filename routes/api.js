const { Router } = require('express')
const { getDestinations } = require('../controllers/api')

const router = Router()

router.get('/destinations', getDestinations)

module.exports = router
