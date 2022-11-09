const express = require('express');

const controller = require('../controller/index.js');

const router = express.Router();

/* ======================= Routes ======================= */

router.get('/', controller.index);

router.get('/about', controller.about);

router.get('/contact', controller.contact);

module.exports = router;
