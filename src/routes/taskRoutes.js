// Import express
const express = require('express');

// Create an Express router
const router = express.Router();

// Import controller functions
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// GET all tasks
router.get('/', getTasks);

// POST create a new task
router.post('/', createTask);

// PUT update a task by ID
router.put('/:id', updateTask);

// DELETE a task by ID
router.delete('/:id', deleteTask);

// Export router
module.exports = router;
