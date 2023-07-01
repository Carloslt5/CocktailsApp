const express = require('express');
const router = express.Router();
const { getRandom } = require('../controllers/random.controllers')

//Random render
router.get("/random", getRandom)

module.exports = router