const router = require('express').Router()

const userRoutes = require('./userRoutes')
const allFamilyRoutes = require('./allFamilyRoutes')
const allDiaryRoutes = require('./allDiaryRoutes')
const singleUserRoutes = require('./singleUserRoutes')
router.use('/users', userRoutes)
router.use('/family', allFamilyRoutes);
router.use('/diary', allDiaryRoutes);
router.use('/user/:id', singleUserRoutes)

module.exports = router