const { Grandparents, Parents, Siblings } = require('../models')

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

// const seedGPs = () => Grandparents.bulkCreate(grandparentData)
const seedFamMembers = () => {
    Grandparents.bulkCreate(grandparentData),
        Parents.bulkCreate(parentData),
        Siblings.bulkCreate(siblingData)
}
module.exports = seedFamMembers