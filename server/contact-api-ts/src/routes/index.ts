import { Router } from 'express';
import ContactRouter from './ContactRouter';

const router = Router();

/**
 * Registering /product sub-routes
 */
// router.use('/product', ProductRouter);

router.use('/contacts', ContactRouter);

/**
 * Exporting registered routes
 */
export default router;
