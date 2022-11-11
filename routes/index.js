const express = require('express');

const controller = require('../controller/index.js');

const router = express.Router({ mergeParams: true });

/* ======================= Routes ======================= */

router.get('/home', controller.index);

router.get('/profile', controller.profile);

router.get('/service', controller.service);

router.get('/partnership', controller.partnership);

router.get('/contact', controller.contact);

module.exports = router;
