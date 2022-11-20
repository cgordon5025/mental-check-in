const router = require('express').Router()
const singleFamRoutes = require('./singleFamilyRoutes')
const singleDiaryRoutes = require('../singleDiaryRoutes')

router.use('/family', singleFamRoutes)
router.use('/diary', singleDiaryRoutes)

module.exports = router