const { Parents } = require('../models')

const parentData = [
    {
        relation: "Sue",
        family_id: 1
    },
    {
        relation: "Jack",
        family_id: 1
    },
    {
        relation: "Susan",
        family_id: 2
    },
    {
        relation: "Marie",
        family_id: 2
    },
    {
        relation: "Ross",
        family_id: 3
    },
    {
        relation: "Ozzy",
        details: "maternal grandmother",
        family_id: 3
    },
]

const seedParents = () => Parents.bulkCreate(parentData)
module.exports = seedParents