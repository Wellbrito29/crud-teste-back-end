const path = require('path');
const config = require(path.join(__dirname, './config/config.json'))["database"];
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: config.dialect,
    host: config.host,
    port: config.port,
    // logging: false
});

module.exports = sequelize;