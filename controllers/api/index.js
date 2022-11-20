const router = require('express').Router()

const userRoutes = require('./userRoutes')
// const allFamilyRoutes = require('./allFamilyRoutes')
// const allDiaryRoutes = require('../../deprecated/controllers/allDiaryRoutes')
// const singleUserRoutes = require('./singleUserRoutes')
const familyRoutes = require('./familyRoutes')
const diaryEntry = require('./diaryRoutes')
router.use('/users', userRoutes)
router.use('/family', familyRoutes)
router.use('/diary', diaryEntry)
// router.use('/family', allFamilyRoutes);
// router.use('/diary', allDiaryRoutes);
// router.use('/user/:id', singleUserRoutes)

module.exports = router