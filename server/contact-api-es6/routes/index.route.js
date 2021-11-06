import { Router } from 'express';
import { ContactRoutes } from './contacts.route.js';
import { AuthRoutes} from './auth.route.js';

export class BaseRouter {
	static Init() {
		const router = new Router();
		// configure app routes here
		router.use('/contacts', ContactRoutes.Init());
		// router.use('/contacts', ContactRoutes.);
		router.use('/auth', AuthRoutes.Init());
		return router;
	}
};
