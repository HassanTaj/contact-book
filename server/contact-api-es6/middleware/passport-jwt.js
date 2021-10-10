import passport from 'passport';
import { BasicStrategy, DigestStrategy } from 'passport-http';
import { Strategy, ExtractJwt } from 'passport-jwt';

const JwtStrategy = Strategy;

import User  from '../models/user.js';

//TODO: npm install passport-http

const AuthStrategies = {
	BASIC: 'basic',
	JWT: 'jwt',
	DIGEST: 'digest'
}

class AuthFactory {
	constructor(authType) {
		this.stragegy = null;

		if (authType == AuthStrategies.BASIC) {
			this.stragegy = new BasicStrategy(
				function (Email, Password, done) {
					User.findOne({ Email: Email }, function (err, user) {
						if (err) { return done(err); }
						if (!user) { return done(null, false); }
						if (!user.validPassword(Password)) { return done(null, false); }
						return done(null, user);
					});
				}
			)
		}

		if (authType == AuthStrategies.DIGEST) {
			this.stragegy = new DigestStrategy({ qop: 'auth' },
				function (Email, done) {
					User.findOne({ Email: Email }, function (err, user) {
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
			opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
			opts.secretOrKey = 'this is my secret shit';
			// opts.issuer = 'accounts.examplesoft.com';
			// opts.audience = 'yoursite.net';
			this.stragegy = new JwtStrategy(opts, function (payload, done) {
				User.findOne({ id: payload.sub }, function (err, user) {
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

	}

	get AuthStrategy() {
		return this.stragegy;
	}
}

export default {
	AuthFactory,
	AuthStrategies,
	configurePassport: (passport) => {
		passport.use(new AuthFactory(AuthStrategies.JWT).AuthStrategy);
	}
}