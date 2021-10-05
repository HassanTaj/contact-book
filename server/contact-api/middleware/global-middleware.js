const passport = require('passport');
const passportMiddleFinger = require('./passport-jwt');

module.exports = {
	Configure: (app) => {
		passportMiddleFinger.configurePassport(passport)
		// app.use(passport.initialize());
		// app.use(passport.session());
	}
};