
import Project from '../models/project.model.js'
import errorHandler from '../helpers/dbErrorHandler.js'

// Create a project
const create = async (req, res) => {
  try {
    const project = new Project(req.body)
    await project.save()
    res.status(201).json(project)
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

// Get all projects
const list = async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Get one project
const read = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json(project)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Update a project
const update = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json(project)
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

// Delete one project
const remove = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json({ message: 'Project deleted successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Delete all projects
const removeAll = async (req, res) => {
  try {
    await Project.deleteMany({})
    res.json({ message: 'All projects deleted successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export default {
  create,
  list,
  read,
  update,
  remove,
  removeAll
}
