const router = require('express').Router()
const { User, Grandparents, Parents, Siblings } = require('../../models')


router.get('/:id', async (req, res) => {
    try {
        const familyData = await User.findByPk(req.params.id, {
            include: [{ model: Grandparents }, { model: Parents }, { model: Siblings }]
        })
        if (!familyData) {
            res.status(400).json({ message: "No family found with this ID" })
        } else {
            res.status(200).json(familyData)
        }
    } catch (err) {
        res.status(500).json(err)

    }
})
//this url is localhost:3001/user/:id/family/grandparents
router.post('/:id/grandparent', async (req, res) => {
    try {
        const newGP = await Grandparents.create({
            relation: req.body.relation,
            details: req.body.details,
            user_id: req.params.id
        })
        res.status(200).json(newGP)
    } catch (err) {
        res.status(500).json(err)
    }
})
//lets add the parents if any
router.post('/:id/parent', async (req, res) => {
    try {
        const parentData = await Parents.create({
            relation: req.body.relation,
            details: req.body.details,
            user_id: req.params.id
        })
        res.status(200).json(parentData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//siblings!

router.post('/:id/sibling', async (req, res) => {
    try {
        const siblingData = await Siblings.create({
            name: req.body.name,
            relation: req.body.relation,
            details: req.body.details,
            user_id: req.params.id
        })
        res.status(200).json(siblingData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router