const { Siblings } = require('../models')

const siblingData = [
    {
        name: "Ben",
        relation: "Brother",
        family_id: 1
    },
    {
        name: "Jung",
        relation: "Brother",
        family_id: 1
    },
    {
        name: "Emma",
        relation: "Sister",
        family_id: 2
    },
    {
        name: "Ev",
        relation: "sibling",
        family_id: 2
    },
]

const seedSibs = () => Siblings.bulkCreate(siblingData)

module.exports = seedSibs