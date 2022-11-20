const router = require('express').Router()
const { User, DiaryEntry } = require('../../../models')

router.post('/', async (req, res) => {
    try {
        const body = req.body
        const newEntry = await DiaryEntry.create({
            ...body
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