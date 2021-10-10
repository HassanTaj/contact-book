import { Router } from 'express';
const router = new Router();
import controller from '../controllers/contact.controller.js';
import passport from 'passport';
const { authenticate } = passport;
import AuthStrategies from '../middleware/passport-jwt.js';

router.get('/', passport.authenticate(AuthStrategies.JWT, { session: false }), controller.get);
router.get('/:id', controller.getSingle);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


export default router