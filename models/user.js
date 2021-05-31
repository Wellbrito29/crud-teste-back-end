const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('users', {
    code: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.TEXT,
    birth: Sequelize.TEXT,
    photo: Sequelize.TEXT,
    codigo: Sequelize.TEXT

})

module.exports = User;