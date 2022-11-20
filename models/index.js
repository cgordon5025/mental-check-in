const User = require('./User');
const Family = require('./Family')
const Grandparents = require('./Grandparents')
const Parents = require('./Parents')
const Siblings = require('./Siblings');
const Diary = require('./Diary')
const DiaryEntry = require('./DiaryEntry');

User.hasOne(Family, {
    foreignKey: 'user_id'
});

Family.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Diary, {
    foreignKey: "user_id"
});

Diary.belongsTo(User, {
    foreignKey: "user_id"
});

Diary.hasMany(DiaryEntry, {
    foreignKey: "diary_id"
});

DiaryEntry.belongsTo(Diary, {
    foreignKey: "diary_id",
    onDelete: "SET NULL"
})
Family.hasMany(Grandparents, {
    foreignKey: "family_id"
});

Grandparents.belongsTo(Family, {
    foreignKey: "family_id"
});

Family.hasMany(Parents, {
    foreignKey: "family_id"
});

Parents.belongsTo(Family, {
    foreignKey: "family_id"
});

Family.hasMany(Siblings, {
    foreignKey: "family_id"
});

Siblings.belongsTo(Family, {
    foreignKey: "family_id"
});

module.exports = { User, Diary, DiaryEntry, Family, Grandparents, Parents, Siblings }