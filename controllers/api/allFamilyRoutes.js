const router = require('express').Router()
const { Grandparents, Parents, Siblings, Family } = require('../../models')
//these routes are for back end and non users to retrieve and analyse data, not for users to be looking at
router.get('/', async (req, res) => {
    try {
        const familyData = await Family.findAll({
            include: [{ model: Grandparents }, { model: Parents }, { model: Siblings }]
        });
        res.status(200).json(familyData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const familyData = await Family.findByPk(req.params.id, {
            include: [{ model: Grandparents }, { model: Parents }, { model: Siblings }]
        });
        if (!familyData) {
            res.status(400).json({ message: "No family found with this ID" })
        } else {
            res.status(200).json(familyData)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
//lets add the grandsparents if there are any


router.delete('/:id', async (req, res) => {
    try {
        const deleteFam = Family.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!deleteFam) {
            res.status(404).json({ message: "unable to delete, no family found with this id" })
            return
        } else {
            res.status(200).json(deleteFam)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router