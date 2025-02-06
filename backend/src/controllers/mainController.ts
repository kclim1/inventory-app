export {}
const axios = require('axios')
const Item = require('../models/itemModels'); 
const {validationResult } = require('express-validator')
const { Request, Response } = require('express');


interface CreateItemInterface {
    itemName: string;
    description?: string;
    price: number;
  }

  //creates a new item 
exports.createItem = async (req: typeof Request, res: typeof Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { itemName, description, price }: CreateItemInterface = req.body;

        const newItem = await Item.create({
            itemName,
            description,
            price: Number(price),
        });
        console.log('item created!')
        res.status(201).json({
            message: "Item successfully created!",
            item: newItem,
        });

    } catch (error) {
        console.error("Error creating item:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// get all items for display in items list 
exports.getAllItems = async(req: typeof Request, res: typeof Response)=>{
    try {
        const items = await Item.findAll();

        res.status(200).json({
            message: "All items retrieved successfully!",
            items, //sequalize returns an array 
        });

    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


// get item by id 
// exports.getItemById = async(req: typeof Req, res: typeof Res)=>{

// }

// //need id 
// exports.updateItem = async(req: typeof Req, res: typeof Res)=>{
    
// }

// //need id 
// exports.deleteItem = async(req: typeof Req, res: typeof Res)=>{
    
// }