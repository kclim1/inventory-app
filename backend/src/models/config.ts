export {};
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config

const sequelize = new Sequelize({
  host: 'localhost', 
  port: 3306,        // default MySQL port
  dialect: 'mysql',  
  database: process.env.DATABASE_NAME, 
  username: process.env.USERNAME,  
  password: process.env.PASSWORD, 
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
