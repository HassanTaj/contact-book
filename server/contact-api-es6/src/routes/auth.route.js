import { AuthController } from '../controllers/auth.controller.js';
import { Router } from 'express'

export class AuthRoutes {
	static Init() {
		const router = new Router();
		router.post('/login', AuthController.login);
		router.post('/signup', AuthController.signup);
		return router;
	}
}
