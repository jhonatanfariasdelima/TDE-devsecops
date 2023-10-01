const Sequelize = require('sequelize');

const connection = new Sequelize('banco','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;