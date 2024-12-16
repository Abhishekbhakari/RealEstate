// server.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/propertyRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));


// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/properties', propertyRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// 2. Create the '.env' file at the root of the project and add the following:
// .env
