// backend/routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const { getAllProperties, getPropertyById, createProperty, updateProperty, deleteProperty } = require('../controllers/propertyController');

// GET all properties
router.get('/', getAllProperties);

// GET a specific property by ID
router.get('/:id', getPropertyById);

// POST a new property
router.post('/', createProperty);

// PUT (update) an existing property
router.put('/:id', updateProperty);

// DELETE a property
router.delete('/:id', deleteProperty);

module.exports = router;
