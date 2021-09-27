const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact.controller').default
// import controller from '../controllers/contact.controller';

//or

// const router = Router();

router.get('/', controller.get);
router.get('/:id', controller.getSingle);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router