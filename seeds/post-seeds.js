const { Post } = require('../models');

const postdata = [
	{
		post_name: 'Donec posuere metus vitae ipsum.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 10,
	},
	{
		post_name: 'Morbi non quam nec dui luctus rutrum.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 8,
	},
	{
		post_name:
			'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 1,
	},
	{
		post_name: 'Nunc purus.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 4,
	},
	{
		post_name: 'Pellentesque eget nunc.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 7,
	},
	{
		post_name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 4,
	},
	{
		post_name: 'In hac habitasse platea dictumst.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 1,
	},
	{
		post_name: 'Morbi non quam nec dui luctus rutrum.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 1,
	},
	{
		post_name: 'Duis ac nibh.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 9,
	},
	{
		post_name: 'Curabitur at ipsum ac tellus semper interdum.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 5,
	},
	{
		post_name: 'In hac habitasse platea dictumst.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 3,
	},
	{
		post_name: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 10,
	},
	{
		post_name: 'Donec dapibus.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 8,
	},
	{
		post_name: 'Nulla tellus.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 3,
	},
	{
		post_name:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		post_content: 'https://gmpg.org/lorem.jpg',
		user_id: 3,
	},
	{
		post_name:
			'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 7,
	},
	{
		post_name: 'In hac habitasse platea dictumst.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 6,
	},
	{
		post_name: 'Etiam justo.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 4,
	},
	{
		post_name: 'Nulla ut erat id mauris vulputate elementum.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 6,
	},
	{
		post_name:
			'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
		post_content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, saepe!',
		user_id: 7,
	},
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;