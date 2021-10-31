import passport from 'passport';
import { MongoConfig } from "./mongoose.js";
import { AuthStrategies, PassportAuthConfig } from "./passport-jwt.js";

export class AppMiddleware {
	static Init(app) {
		MongoConfig.Init();
		passport.use(PassportAuthConfig.Init(AuthStrategies.JWT));
	}
}
