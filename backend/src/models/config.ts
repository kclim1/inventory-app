export {};
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost', 
  port: 3306,        // default MySQL port
  dialect: 'mysql',  
  database: 'arkmind_inventory', 
  username: 'root',  
  password: 'iamroot', 
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
