const seedUsers = require('./user-seeds');
const seedGPs = require('./grandparents-seeds')
const seedParents = require('./parents-seeds')
const seedSibs = require('./sibling-seeds')
const seedDiaryEntry = require('./diaryEntry-seeds')
// const seedFamMembers = require('./famMembers-seeds')



const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    // await seedFamMembers()
    // console.log('\n----- ALL FAM SEEDED -----\n');
    await seedGPs();
    console.log('\n----- GPS SEEDED -----\n')
    await seedParents();
    console.log('\n----- PARENTS SEEDED -----\n')
    await seedSibs()
    console.log('\n----- SIBS SEEDED -----\n');
    await seedDiaryEntry()
    console.log('\n----- DIARY ENTRY SEEDED -----\n');
};

// seedAll();

module.exports = seedAll

