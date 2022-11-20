const seedUsers = require('./user-seeds');
const seedGPs = require('./grandparents-seeds');
const seedParents = require('./parents-seeds')
const seedSibs = require('./siblings-seed');
const seedDiaryEntry = require('./diaryEntry-seeds')



const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
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

