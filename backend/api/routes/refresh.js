const express = require('express');
const router = express.Router();
const rtController = require('../../controllers/rtController');

router.get('/', rtController.evaluateRefreshToken);

module.exports = router;