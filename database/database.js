require('dotenv').config();
const Sequelize = require('sequelize');

const password = process.env.MYSQL;
console.log(password);

const connection = new Sequelize('banco','root', password,{
    host: '172.19.0.2',
    dialect: 'mysql'
});

module.exports = connection;