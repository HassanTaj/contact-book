import passport from 'passport';
import passportMiddleware from './passport-jwt.js';

export function Configure(app) {
	let pp = passportMiddleware.configurePassport(passport)
}