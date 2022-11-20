const { Grandparents } = require('../models')

const grandparentData = [
    {
        relation: "grandma Claire",
        details: "paternal grandmother",
        user_id:1
    },
    {
        relation: "grandma Ruth",
        details: "maternal grandmother",
        user_id: 1
    },
    {
        relation: "grandpa Barney",
        details: "paternal grandfather",
        user_id: 1
    },
    {
        relation: "grandpa Norman",
        details: "maternal grandfather",
        user_id: 1
    },
    {
        relation: "grandma Cindy",
        details: "paternal grandmother",
        user_id: 2
    },
    {
        relation: "grandma Wendy",
        details: "maternal grandmother",
        user_id: 2
    },
    {
        relation: "grandpa Jeff",
        details: "paternal grandfather",
        user_id: 2
    },
    {
        relation: "grandpa Maury",
        details: "maternal grandfather",
        user_id: 2
    },
    {
        relation: "grandma Wendy",
        details: "paternal grandmother",
        user_id: 3
    },
    {
        relation: "grandma Nancy",
        details: "maternal grandmother",
        user_id: 3
    },
    {
        relation: "grandpa Maury",
        details: "paternal grandfather",
        user_id: 3
    },
    {
        relation: "grandpa Eddie",
        details: "maternal grandfather",
        user_id: 3
    }
]
const seedGPs = () => Grandparents.bulkCreate(grandparentData)
module.exports = seedGPs