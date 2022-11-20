const router = require('express').Router()
const { Diary, DiaryEntry } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const diaryData = await Diary.findAll()
        res.status(200).json(diaryData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const diaryData = await Diary.findByPk(req.params.id, {
            include: [{ model: DiaryEntry }]
        });
        if (!diaryData) {
            res.status(400).json({ message: "no diary found with this id" })
        } else {
            res.status(200).json(diaryData)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteDiary = Diary.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!deleteDiary) {
            res.status(404).json({ message: "unable to delete, no family found with this id" })
            return
        } else {
            res.status(200).json(deleteDiary)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router