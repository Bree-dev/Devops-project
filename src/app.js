// Import Express framework
const express = require('express');

// Load environment variables
require('dotenv').config();

// Import MongoDB connection function
const connectDB = require('./config/db');

// Import task routes
const taskRoutes = require('./routes/taskRoutes');

// Create an Express application instance
const app = express();

/**
 * Middleware to parse incoming JSON requests
 * Must come BEFORE routes
 */
app.use(express.json());

/**
 * Use routes under /api/tasks
 */
app.use('/api/tasks', taskRoutes);

/**
 * Health check route
 */
app.get('/', (req, res) => {
  res.send('Task Manager API is running');
});

/**
 * Connect to MongoDB Atlas
 */
connectDB();

/**
 * Define the port number
 */
const PORT = process.env.PORT || 3000;

/**
 * Start the Express server
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
