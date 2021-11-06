import passport from 'passport';
import PassportHttp from 'passport-http';
import PassportJwt, { Strategy } from 'passport-jwt';
import { AppConfig } from '../config/app-config.js';
const { BasicStrategy, DigestStrategy } = PassportHttp;

import { User } from './../models/user.js'
export class PassportAuthConfig {
	static Init(authType) {
		let currentStrategy = null;
		if (authType == AuthStrategies.BASIC) {
			currentStrategy = new BasicStrategy(
				function (Email, Password, done) {
					User.Collection.findOne({ Email: Email }, function (err, user) {
						if (err) { return done(err); }
						if (!user) { return done(null, false); }
						if (!user.validPassword(Password)) { return done(null, false); }
						return done(null, user);
					});
				}
			)
		}

		if (authType == AuthStrategies.DIGEST) {
			currentStrategy = new DigestStrategy({ qop: 'auth' },
				function (Email, done) {
					User.Collection.findOne({ Email: Email }, function (err, user) {
						if (err) { return done(err); }
						if (!user) { return done(null, false); }
						return done(null, user, user.Password);
					});
				},
				function (params, done) {
					// validate nonces as necessary
					done(null, true)
				}
			);
		}

		if (authType == AuthStrategies.JWT) {
			var opts = {}
			opts.jwtFromRequest = PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
			opts.secretOrKey = AppConfig.Current.Secret;
			// opts.issuer = 'accounts.examplesoft.com';
			// opts.audience = 'yoursite.net';
			currentStrategy = new PassportJwt.Strategy(opts, function (payload, done) {
				User.Collection.findOne({ id: payload.sub }, function (err, user) {
					if (err) {
						return done(err, false);
					}
					
					if (user) {
						return done(null, user);
					} else {
						return done(null, false);
						// or you could create a new account
					}
				});
			});
		}

		return currentStrategy
	}
}

export const AuthStrategies = {
	BASIC: 'basic',
	JWT: 'jwt',
	DIGEST: 'digest'
}