const Products = require('../models/products.models');

const create = (req, res) => {
    Products.create(req.body)
        .then(product => res.status(201).json(product))
        .catch(err => res.status(400).json(err));
}

const findAll = (req, res) => {
    Products.find({})
        .then(product => res.status(200).json(product))
        .catch(err => res.status(400).json(err));
}

const findOne = (req, res) => {
    const { id } = req.params;
    Products.findById(id)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(400).json(err));
}

const deleteOne = (req, res) => {
    const { id } = req.params;
    Products.findByIdAndDelete(id)
        .then(product => res.status(201).json(product))
        .catch(err => res.status(400).json(err));
}

const updateOne = (req, res) => {
    const { id } = req.params;
    Products.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then(product => res.status(201).json(product))
        .catch(err => res.status(400).json(err));
}
module.exports = { create, findAll, findOne, deleteOne, updateOne };