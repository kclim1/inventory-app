# Backend 

## Getting Started
1. npm install <br>
NOTE: Ensure you have mysql installed and login to your account. Run command ```CREATE DATABASE arkmind_inventory;``` in terminal. After that the backend should handle the rest :D 
3. To run the backend ```npm run dev ```

## Create env file in backend folder. 
1. Configure PORT variable in .env file. Set to 3000.
2. Configure MySQL database with the variables below or feel free to use your own. The config file can be found in backend/src/models/config.ts<br>
```
# Sequelize config 
DATABASE_NAME = "arkmind_inventory"
USERNAME = "root"
PASSWORD = "iamroot"
```

