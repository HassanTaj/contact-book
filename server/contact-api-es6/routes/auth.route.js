import controller from '../controllers/auth.controller.js';
import { Router } from 'express'

const router = Router();
router.post('/login', controller.login);
router.post('/signup', controller.signup);
export default router