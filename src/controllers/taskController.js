// Import the Task model
const Task = require('../models/Task');

/**
 * GET /api/tasks
 * Retrieve all tasks from the database
 */
const getTasks = async (req, res) => {
  try {
    const { completed, search, sortBy } = req.query;

    // Build query object
    let query = {};
    if (completed) query.completed = completed === 'true'; // filter by completed status
    if (search) query.title = { $regex: search, $options: 'i' }; // search by title (case-insensitive)

    // Build sort object
    let sort = {};
    if (sortBy === 'latest') sort.createdAt = -1; // newest first
    if (sortBy === 'oldest') sort.createdAt = 1;  // oldest first

    const tasks = await Task.find(query).sort(sort);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * POST /api/tasks
 * Create a new task
 */
const createTask = async (req, res) => {
  // Destructure title and description from request body
  const { title, description } = req.body;

  // Create a new Task instance
  const task = new Task({ title, description });

  try {
    // Save task to MongoDB
    const newTask = await task.save();
    // Send 201 status with newly created task
    res.status(201).json(newTask);
  } catch (error) {
    // If error occurs (e.g., missing title), send 400 status
    res.status(400).json({ message: error.message });
  }
};

/**
 * PUT /api/tasks/:id
 * Update a task by ID
 */
const updateTask = async (req, res) => {
  const { id } = req.params; // Get task ID from URL
  const { title, description, completed } = req.body; // Get updates

  try {
    // Find task by ID and update
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true, runValidators: true } // Return updated doc & validate
    );

    // If task not found
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Send updated task as JSON
    res.json(updatedTask);
  } catch (error) {
    // Send 400 status for invalid updates or errors
    res.status(400).json({ message: error.message });
  }
};

/**
 * DELETE /api/tasks/:id
 * Delete a task by ID
 */
const deleteTask = async (req, res) => {
  const { id } = req.params; // Get task ID from URL

  try {
    // Find task by ID and delete
    const deletedTask = await Task.findByIdAndDelete(id);

    // If task not found
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Send success message
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    // Send 500 status for errors
    res.status(500).json({ message: error.message });
  }
};

// Export all controller functions for use in routes
module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};
