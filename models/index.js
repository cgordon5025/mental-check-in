const User = require('./User');
const Grandparents = require('./Grandparents')
const Parents = require('./Parents')
const Siblings = require('./Siblings');
const DiaryEntry = require('./DiaryEntry');
// const Family = require('./Family')
// const Diary = require('./Diary')

// User.hasOne(Family, {
//     foreignKey: 'user_id'
// });

// Family.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "SET NULL"

// });

// User.hasOne(Diary, {
//     foreignKey: "user_id"
// });

// Diary.belongsTo(User, {
//     foreignKey: "user_id",
//     onDelete: "SET NULL"

// });

// Diary.hasMany(DiaryEntry, {
//     foreignKey: "diary_id"
// });

// DiaryEntry.belongsTo(Diary, {
//     foreignKey: "diary_id",
//     onDelete: "SET NULL"
// })
// Family.hasMany(Grandparents, {
//     foreignKey: "family_id"
// });

// Grandparents.belongsTo(Family, {
//     foreignKey: "family_id",
//     onDelete: "SET NULL"
// });

// Family.hasMany(Parents, {
//     foreignKey: "family_id"
// });

// Parents.belongsTo(Family, {
//     foreignKey: "family_id",
//     onDelete: "SET NULL"

// });

// Family.hasMany(Siblings, {
//     foreignKey: "family_id"
// });

// Siblings.belongsTo(Family, {
//     foreignKey: "family_id",
//     onDelete: "SET NULL"

// });
User.hasMany(Grandparents, {
    foreignKey: "user_id"
})
Grandparents.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
})

User.hasMany(Parents, {
    foreignKey: "user_id"
})
Parents.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
})

User.hasMany(Siblings, {
    foreignKey: "user_id"
})
Siblings.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
})

User.hasMany(DiaryEntry, {
    foreignKey: "user_id"
})
DiaryEntry.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
})
// module.exports = { User, Diary, DiaryEntry, Family, Grandparents, Parents, Siblings }
module.exports = { User, DiaryEntry, Grandparents, Parents, Siblings }