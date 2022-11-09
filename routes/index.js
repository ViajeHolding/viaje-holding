const express = require('express');

const controller = require('../controller/index.js');

const router = express.Router();

/* ======================= Routes ======================= */

router.get('/', controller.index);

router.get('/company-profile', controller.companyProfile);

router.get('/services', controller.services);

router.get('/partnership', controller.partnership);

router.get('/contact', controller.contact);

module.exports = router;
