export {} 
const express = require('express')
const router = express.Router();
const mainController = require('../controllers/mainController')
const {validateItem} = require('../validators/validateItem')

// used for testing. delete later 
// router.get('/', (req: typeof Req, res: typeof Res) => {
//     res.send("welcome to gotham city")
//     console.log("postman button clicked !")
// })

// all routes appended with /api/items in server.ts 

//post '/' - create new item 
router.post('/',validateItem, mainController.createItem) 

//get all items
router.get('/', mainController.getAllItems)

// get '/:id' - get an item by id 
router.get('/:id', mainController.getItemById);

// // put /:id update existing item by id 
router.put('/:id',validateItem, mainController.updateItem);

// //delete '/:id' delete item by id 
router.delete('/:id', mainController.deleteItem);


module.exports = router 


