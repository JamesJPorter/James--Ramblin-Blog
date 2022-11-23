const { User } = require('../models');

const userdata = [
	{
		username: 'alesmonde0',
		password: '12345',
	},
	{
		username: 'jwilloughway1',
		password: '12345',
	},
	{
		username: 'iboddam2',
		password: '12345',
	},
	{
		username: 'dstanmer3',
		password: '12345',
	},
	{
		username: 'djiri4',
		password: '12345',
	},
	{
		username: 'msprague5',
		password: '12345',
	},
	{
		username: 'mpergens6',
		password: '12345',
	},
	{
		username: 'tpenniell7',
		password: '12345',
	},
	{
		username: 'msabbins8',
		password: '12345',
	},
	{
		username: 'jmacarthur9',
		password: '12345',
	},
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;