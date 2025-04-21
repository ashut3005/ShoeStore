const express = require('express')
const router = express.Router();
const addUser = require('../controls/adduser')
const findUser = require('../controls/fetch')
const updateUser = require('../controls/update')
const updatePassword = require('../controls/change')


router.post('/signup', addUser)
router.post('/login', findUser)
router.put('/update', updateUser)
router.put('/changepassword', updatePassword)


module.exports = router;