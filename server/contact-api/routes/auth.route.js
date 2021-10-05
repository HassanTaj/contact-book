// import controller from '../controllers/auth.controller';
// import { Router } from 'express'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller')

// const router = Router();
router.post('/login', controller.login);
router.post('/signup', controller.signup);
module.exports = router