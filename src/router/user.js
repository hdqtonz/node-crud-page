const express = require('express')
const User = require('../model/user')
const router = express.Router()
const userController = require('../controllers/user')


// get all users
router.get('/user', userController.allUser)

// get one user
router.get('/user/:id',userController.oneUser)

// add user
router.post('/user', userController.addUser)

// update user
router.patch('/user/:id', userController.updateUser)

// delete user
router.delete('/user/:id', userController.deleteUser)


module.exports = router