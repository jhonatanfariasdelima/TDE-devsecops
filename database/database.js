const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo de configuração
const configFile = path.join(__dirname, 'mysql.json');

// Lê o arquivo de configuração
const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));

// Crie uma instância do Sequelize usando as informações de configuração
const connection = new Sequelize('banco', 'root', config.password, {
    host: '172.19.0.2',
    dialect: 'mysql'
});

module.exports = connection;
