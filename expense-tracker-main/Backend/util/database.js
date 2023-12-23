const Sequelize = require('sequelize');

const sequelize = new Sequelize('ExpenseApp', 'root', 'Mysql@2647', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;