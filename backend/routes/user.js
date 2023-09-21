const express = require("express")
const router = express.Router()
const {pass}= require('../controller/password')

router.route('/pass').post(pass)



module.exports = router