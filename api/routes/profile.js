const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/profile');

router.get('/', ProfileController.profile_get);

module.exports = router;
