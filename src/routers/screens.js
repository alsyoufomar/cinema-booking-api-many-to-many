const express = require('express')
const router = express.Router()

const { getSeatsForScreen } = require('../controllers/screen')

router.get("/:screenId/seats", getSeatsForScreen)

module.exports = router