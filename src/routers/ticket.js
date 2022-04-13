const express = require('express')
const router = express.Router()

const { bookTicket } = require('../controllers/ticket')

router.post("/", bookTicket)

module.exports = router