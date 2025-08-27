// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'inventories',
    'timotiusdana',
    'thaiunionkl123',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

MediaSourceHandle.exports = sequelize;