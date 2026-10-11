
import express from 'express'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

// Sign in
router.post('/auth/signin', authCtrl.signin)

// Sign out
router.get('/auth/signout', authCtrl.signout)

export default router
