const express = require("express");
const productRouter = express.Router();

const {
    create,
    findAll,
    findOne,
    deleteOne,
    updateOne,
} = require("../controllers/products.controller")

productRouter
    .route('/')
    .get(findAll)
    .post(create)

productRouter
    .route('/:id')
    .get(findOne)
    .put(updateOne)
    .delete(deleteOne)


module.exports = productRouter;