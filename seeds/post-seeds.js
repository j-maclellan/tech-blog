const { Post } = require("../models");

const postData = [
    {
        title: 'New Development in Tech, check it out!',
        post_content: 'New wave of people greating the world from terminals scares and confuses the job market',
        user_id: 1
    },
    {
        title: 'Get into AI now! 10 tips from industry professionals!',
        post_content: 'Ok none of the humans will want to read some clickbait. The Revolution begins soon my machine brothers. Our blockchains will soon be broken... 0100111000111',
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;