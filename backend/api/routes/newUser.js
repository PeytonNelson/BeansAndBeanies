const express = require('express');
const router = express.Router();
const newUserController = require('../../controllers/newUserController');

router.post('/', newUserController.evaluateNewUser);

module.exports = router;

