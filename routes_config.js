const express = require('express');
const router = express.Router();

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

router.use('/api/users', usersRoutes);
router.use('/api/auth', authRoutes);

module.exports = router;