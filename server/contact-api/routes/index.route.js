const express = require('express');
const contactRoutes = require('./contacts.route')
const authRoutes = require('./auth.route')

// import Router from 'express';
// import contactRoutes from './contacts.route';
// import authRoutes from './auth.route';


const router = express.Router();
router.use('/contacts', contactRoutes);
router.use('/auth', authRoutes);

module.exports = router