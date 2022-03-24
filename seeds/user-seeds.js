const { User } = require("../models");

const userData = [
    {
        username: 'jmacman',
        email: 'macman@email.com',
        password: 'password'
    },
    {
        username: 'testdummy',
        email: 'testing@email.com',
        password: 'protected'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;