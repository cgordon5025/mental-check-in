const router = require('express').Router()
const { User, DiaryEntry } = require('../../models')


router.get('/:id', async (req, res) => {
    try {
        const diaryData = await User.findByPk(req.params.id, {
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
router.post('/:id', async (req, res) => {
    try {
        const newEntry = await DiaryEntry.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.params.id

        });
        res.status(200).json(newEntry)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteEntry = DiaryEntry.destroy({
            where: { id: req.params.id }
        });
        if (!deleteEntry) {
            res.status(404).json({ message: "unable to delete entry" })
        } else {
            res.status(200).json(deleteEntry)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router