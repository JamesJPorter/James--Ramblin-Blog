const sequelize = require('../config/config');
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log('Connected to DB');
	console.log('--------------');
	console.log('Seeding user table');
	try {
		await seedUsers();
		console.log('***** SUCCESS!! *****');
	} catch (err) {
		console.log(err);
	}
	console.log('--------------');
	console.log('Seeding post table');
	try {
		await seedPosts();
		console.log('***** SUCCESS!! *****');
	} catch (err) {
		console.log(err);
	}
	console.log('--------------');
	console.log('Seeding comment table');
	try {
		await seedComments();
		console.log('***** SUCCESS!! *****');
	} catch (err) {
		console.log(err);
	}
	console.log('--------------');
	console.log('All done!');
	process.exit(0);
};

seedAll();