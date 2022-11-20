const router = require('express').Router()
const { Grandparents, Parents, Siblings } = require('../../../models')

//this url is localhost:3001/user/:id/grandparents
router.post('/grandparent', async (req, res) => {
    try {
        const newGP = await Grandparents.create({
            relation: req.body.relation,
            details: req.body.details,
            family_id: req.body.family_id
        })
        res.status(200).json(newGP)
    } catch (err) {
        res.status(500).json(err)
    }
})
//lets add the parents if any
router.post('/parent', async (req, res) => {
    try {
        const parentData = await Parents.create({
            relation: req.body.relation,
            details: req.body.details,
            family_id: req.body.family_id
        })
        res.status(200).json(parentData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//siblings!

router.post('/sibling', async (req, res) => {
    try {
        const siblingData = await Siblings.create({
            name: req.body.name,
            relation: req.body.relation,
            details: req.body.details,
            family_id: req.body.family_id
        })
        res.status(200).json(siblingData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router