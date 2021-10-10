import { Router } from 'express';
import contactRoutes from './contacts.route.js';
import authRoutes from './auth.route.js';

// import Router from 'express';
// import contactRoutes from './contacts.route';
// import authRoutes from './auth.route';


const router = new Router();
router.use('/contacts', contactRoutes);
router.use('/auth', authRoutes);

export default router