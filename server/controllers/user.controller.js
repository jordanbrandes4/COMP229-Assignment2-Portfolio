
import User from '../models/user.model.js'
import errorHandler from '../helpers/dbErrorHandler.js'

// Create a user
const create = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json({
      message: 'User created successfully'
    })
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

// Get all users
const list = async (req, res) => {
  try {
    const users = await User.find().select('-hashed_password -salt')
    res.json(users)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Get one user
const read = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-hashed_password -salt')

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Update a user
const update = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    if (req.body.name !== undefined) {
      user.name = req.body.name
    }

    if (req.body.email !== undefined) {
      user.email = req.body.email
    }

    if (req.body.password) {
      user.password = req.body.password
    }

    user.updated = Date.now()
    await user.save()

    res.json({ message: 'User updated successfully' })
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

// Delete one user
const remove = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json({ message: 'User deleted successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Delete all users
const removeAll = async (req, res) => {
  try {
    await User.deleteMany({})
    res.json({ message: 'All users deleted successfully' })
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
