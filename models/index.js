const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.hasOne(User, {
    foreignKey: 'user_id'
})

Comment.hasOne(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment};

