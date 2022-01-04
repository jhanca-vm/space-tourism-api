const { Router } = require('express')
const { getData } = require('../controllers/api')

const router = Router()

router.get('/destinations', getData)
router.get('/crew', getData)
router.get('/technology', getData)

module.exports = router
