const { Siblings } = require('../models')

const siblingData = [
    {
        name: "Ben",
        relation: "Brother",
        user_id: 1
    },
    {
        name: "Jung",
        relation: "Brother",
        user_id: 1
    },
    {
        name: "Emma",
        relation: "Sister",
        user_id: 2
    },
    {
        name: "Ev",
        relation: "sibling",
        user_id: 2
    },
]

const seedSibs = () => Siblings.bulkCreate(siblingData)

module.exports = seedSibs