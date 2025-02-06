// // stack overflow solution to "Cannot redeclare block scoped variable" is exporting empty {} 
export {}; 
const express = require('express');
const axios = require('axios')
const dotenv = require('dotenv').config()
const app = express();
const PORT = process.env.PORT
const itemRoutes = require('./routes/itemRoutes')
const sequelize = require('./models/config')

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


// Sync models with the database
sequelize.sync({ force: false })  // Use 'force: true' only if you want to drop tables and recreate them
  .then(() => {
    console.log('Database synchronized!');
  })
  .catch((error: unknown) => {
    console.error('Error syncing database:', error);
  });


// appends / api/items to all routes
app.use('/api/items',itemRoutes)

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
