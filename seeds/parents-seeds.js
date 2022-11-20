const { Parents } = require('../models')

const parentData = [
    {
        relation: "Sue",
        user_id: 1
    },
    {
        relation: "Jack",
        user_id: 1
    },
    {
        relation: "Susan",
        user_id: 2
    },
    {
        relation: "Marie",
        user_id: 2
    },
    {
        relation: "Ross",
        user_id: 3
    },
    {
        relation: "Ozzy",
        details: "maternal grandmother",
        user_id: 3
    },
]

const seedParents = () => Parents.bulkCreate(parentData)
module.exports = seedParents