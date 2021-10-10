import passport from 'passport';
import passportMiddleware from './passport-jwt.js';

export function Configure(app) {
	passportMiddleware.configurePassport(passport);
}