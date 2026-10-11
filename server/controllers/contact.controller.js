
import Contact from '../models/contact.model.js'
import errorHandler from '../helpers/dbErrorHandler.js'

// Create a contact
const create = async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    res.status(201).json(contact)
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

// Get all contacts
const list = async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Get one contact
const read = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }

    res.json(contact)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Update a contact
const update = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }

    res.json(contact)
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

// Delete one contact
const remove = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }

    res.json({ message: 'Contact deleted successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Delete all contacts
const removeAll = async (req, res) => {
  try {
    await Contact.deleteMany({})
    res.json({ message: 'All contacts deleted successfully' })
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
