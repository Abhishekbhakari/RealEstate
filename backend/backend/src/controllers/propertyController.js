const Property = require('../models/propertyModel');

const createProperty = async (req, res) => {
  try {
    const { title, description, price, location } = req.body;
    const property = new Property({ title, description, price, location });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createProperty,
  getProperties,
};