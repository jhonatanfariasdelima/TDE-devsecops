//require('dotenv').config();
const Sequelize = require('sequelize');

const password = process.env.MYSQL_PASSWORD;

const connection = new Sequelize('banco','root', 'root',{
    host: '172.19.0.2',
    dialect: 'mysql'
});

module.exports = connection;