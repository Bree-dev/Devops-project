// Import Mongoose to create a schema and model
const mongoose = require('mongoose');

// Define the schema for a Task
const taskSchema = new mongoose.Schema({
  // Title of the task (required)
  title: {
    type: String,
    required: true
  },
  // Optional description of the task
  description: {
    type: String,
    default: ''
  },
  // Status: completed or not
  completed: {
    type: Boolean,
    default: false
  },
  // Timestamp when the task is created
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the Task model for use in controllers
module.exports = mongoose.model('Task', taskSchema);
