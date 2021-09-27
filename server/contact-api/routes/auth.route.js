import controller from '../controllers/auth.controller';
import { Router } from 'express'


const router = Router();
router.get('/login', controller.login);
router.get('/signup', controller.signup);
module.exports = router