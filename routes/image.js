const { Router } = require('express')
const { getImage } = require('../controllers/image')

const router = Router()

router.get('/:folder/:image', getImage)

module.exports = router
