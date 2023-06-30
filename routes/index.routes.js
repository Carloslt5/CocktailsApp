const express = require('express');
const router = express.Router();
const { indexPage } = require('../controllers/index.controllers')

//Index render
router.get("/", indexPage)

module.exports = router