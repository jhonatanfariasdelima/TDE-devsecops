const Sequelize = require('sequelize');
//const minhaVariavel = process.env.MYSQL;


const connection = new Sequelize('banco','root', `root`,{
    host: '172.17.0.2',
    dialect: 'mysql'
});

module.exports = connection;