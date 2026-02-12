const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { active } = req.query;
    let query = {};

    // Filter by active status
    if (active !== undefined) {
      query.active = active === 'true';
    }

    const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   POST /api/projects
// @desc    Create new project
// @access  Admin
router.post('/', async (req, res) => {
  try {
    const { title, description, imageUrl, technologies, order, active } = req.body;

    const project = new Project({
      title,
      description,
      imageUrl,
      technologies: technologies || [],
      order: order || 0,
      active: active !== undefined ? active : true,
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: error.message });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/projects/:id
// @desc    Update project
// @access  Admin
router.put('/:id', async (req, res) => {
  try {
    const { title, description, imageUrl, technologies, order, active } = req.body;

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl, technologies, order, active },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: error.message });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   DELETE /api/projects/:id
// @desc    Delete project
// @access  Admin
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
