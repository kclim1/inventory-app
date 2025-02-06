const {body} = require('express-validator')

exports.validateItem = [
    body("itemName")
        .trim()
        .notEmpty()
        .withMessage("Item name is required")
        .isLength({ max: 100 })
        .withMessage("Item name must be at most 100 characters long"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage("Description must be at most 500 characters long"),

    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isFloat({ gt: 0 })  //gt = > greater than. price cannot be negative . 
        .withMessage("Price must be a positive number"),
];

