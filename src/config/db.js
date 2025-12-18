// Import mongoose (official MongoDB ODM for Node.js)
const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

/**
 * Function to connect to MongoDB Atlas
 * Using async/await as recommended by Mongoose documentation
 */
const connectDB = async () => {
  try {
    // Connect to MongoDB using connection string from .env
    await mongoose.connect(process.env.MONGO_URI);

    // Log success message if connection is successful
    console.log('MongoDB connected successfully');
  } catch (error) {
    // Log error message if connection fails
    console.error('MongoDB connection error:', error.message);

    // Exit the application if database connection fails
    process.exit(1);
  }
};

// Export the connection function so it can be used in app.js
module.exports = connectDB;
