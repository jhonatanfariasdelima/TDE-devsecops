const Sequelize = require('sequelize');

const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

if (MYSQL_PASSWORD) {
    console.log('A API_KEY é:', MYSQL_PASSWORD);
} else {
    console.error('A variável de ambiente API_KEY não está definida.');
}

// Crie uma instância do Sequelize usando as informações de configuração
const connection = new Sequelize('banco', 'root', MYSQL_PASSWORD, {
    host: '172.19.0.2',
    dialect: 'mysql'
});

module.exports = connection;
