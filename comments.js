// Create web server

// Import express
const express = require('express');

// Create a router object
const router = express.Router();

// Import the comments model
const Comments = require('../models/comments');

// Import the comments controller
const commentsController = require('../controllers/commentsController');

// Get all comments
router.get('/', commentsController.comments_get_all);

// Get a comment by id
router.get('/:id', commentsController.comments_get_by_id);

// Create a new comment
router.post('/', commentsController.comments_create);

// Delete a comment
router.delete('/:id', commentsController.comments_delete);

// Update a comment
router.put('/:id', commentsController.comments_update);

// Export the router
module.exports = router;