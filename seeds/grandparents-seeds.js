const { Grandparents } = require('../models')

const grandparentData = [
    {
        relation: "grandma Claire",
        details: "paternal grandmother",
        family_id: 1
    },
    {
        relation: "grandma Ruth",
        details: "maternal grandmother",
        family_id: 1
    },
    {
        relation: "grandpa Barney",
        details: "paternal grandfather",
        family_id: 1
    },
    {
        relation: "grandpa Norman",
        details: "maternal grandfather",
        family_id: 1
    },
    {
        relation: "grandma Cindy",
        details: "paternal grandmother",
        family_id: 2
    },
    {
        relation: "grandma Wendy",
        details: "maternal grandmother",
        family_id: 2
    },
    {
        relation: "grandpa Jeff",
        details: "paternal grandfather",
        family_id: 2
    },
    {
        relation: "grandpa Maury",
        details: "maternal grandfather",
        family_id: 2
    },
    {
        relation: "grandma Wendy",
        details: "paternal grandmother",
        family_id: 3
    },
    {
        relation: "grandma Nancy",
        details: "maternal grandmother",
        family_id: 3
    },
    {
        relation: "grandpa Maury",
        details: "paternal grandfather",
        family_id: 3
    },
    {
        relation: "grandpa Eddie",
        details: "maternal grandfather",
        family_id: 3
    }
]
const seedGPs = () => Grandparents.bulkCreate(grandparentData)
module.export = seedGPs