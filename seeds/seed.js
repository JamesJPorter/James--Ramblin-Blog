const sequelize = require('../config/config');
const { Post, User, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true
  });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();