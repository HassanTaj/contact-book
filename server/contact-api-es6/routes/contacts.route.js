import { Router } from 'express';
import passport from 'passport';
import { AuthStrategies } from '../middleware/passport-jwt.js';
import multer from 'multer';
import { MulterConfig, StorageType } from '../middleware/multer.js';
import { ContactController } from "../controllers/contact.controller.js";

export class ContactRoutes {
	static Init() {
		const router = new Router();
		// router.get('/', passport.authenticate(AuthStrategies.JWT, { session: false }), ContactController.get);
		router.get('', ContactController.get);
		router.get(':id', ContactController.getSingle);
		router.post('', multer({ storage: MulterConfig.Init(StorageType.DISK_STORAGE) }).single('image'), ContactController.post);
		router.put(':id', ContactController.put);
		router.delete(':id', ContactController.delete);

		const subRouter =  new Router();
		subRouter.get('/deleteall', ContactController.deleteAll);
		router.use('/',subRouter);
		return router;
	}
}
