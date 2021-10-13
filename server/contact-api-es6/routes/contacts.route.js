import { Router } from 'express';
const router = new Router();
import controller from '../controllers/contact.controller.js';
import passport from 'passport';
import PassportJwtModule from '../middleware/passport-jwt.js';
const { AuthStrategies } = PassportJwtModule;
import multer from 'multer';
import { MulterConfigFactory, StorageType } from '../middleware/multer.js';

router.get('/', passport.authenticate(AuthStrategies.JWT, { session: false }), controller.get);
router.get('/:id', controller.getSingle);
router.post('/', multer({ storage: new MulterConfigFactory(StorageType.DISK_STORAGE).CurrentConfig }).single('image'), controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


export default router