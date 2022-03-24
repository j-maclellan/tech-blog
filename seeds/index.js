const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

// set up and log seeds for models
const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log("---------  DB SYNC SUCCESS! ---------");
    await seedUsers();
    console.log("---------  USERS SEEDED! ---------");
    await seedPosts();
    console.log("---------  POSTS SEEDED! ---------");
    await seedComments();
    console.log("---------  COMMENTS SEEDED! ---------");
    process.exit(0);
}

seedAll();
