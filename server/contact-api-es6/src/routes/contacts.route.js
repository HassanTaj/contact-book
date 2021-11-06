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
		router.route('/:id')
		.get(ContactController.getSingle)
		.put(multer({ storage: MulterConfig.Init(StorageType.DISK_STORAGE) }).single('image'), ContactController.put)
		.delete(ContactController.delete);
		
		router.route('/')
			.get(ContactController.get)
			.post(multer({ storage: MulterConfig.Init(StorageType.DISK_STORAGE) }).single('image'), ContactController.post);

		router.route('/deleteall').delete(ContactController.deleteAll);
		
		return router;
	}
}
