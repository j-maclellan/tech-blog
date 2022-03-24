const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Uhm..... is anyone else seeing this? Wtf?',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Oh no this is a RP thread, no need to worry fellow human',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Really cool! Hope they all find high paying tech jobs!!',
        user_id: 2,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;