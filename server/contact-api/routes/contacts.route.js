const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact.controller');
const passport = require('passport');
const { AuthStrategies } = require('../middleware/passport-jwt');

// import controller from '../controllers/contact.controller';

//or

// const router = Router();

router.get('/', passport.authenticate(AuthStrategies.JWT, { session: false }), controller.get);
router.get('/:id', controller.getSingle);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router