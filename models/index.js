const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {onDelete: "CASCADE"});

User.hasMany(Comment, {onDelete: "CASCADE"});

Post.hasMany(Comment, {});

Post.hasOne(User, {
    foreignKey: 'user_id', 
})

Comment.hasOne(Post, {
    foreignKey: 'post_id'
});

Comment.hasOne(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment};

