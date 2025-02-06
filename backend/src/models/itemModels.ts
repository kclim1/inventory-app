export {}
const { DataTypes } = require('sequelize');
const sequelize = require('./config');  



const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  itemName: {
    type: DataTypes.STRING(100),  // Max length of 100 characters for the name
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(500),  // Max length of 500 characters for the description
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),  // Decimal type for price, with 2 decimal places
    allowNull: false
  }
}, {
  tableName: 'items',  // The name of the table in the database
  timestamps: true,    // Automatically create createdAt and updatedAt fields
  underscored: true    // Use snake_case for column names in the database
});

module.exports = Item;
