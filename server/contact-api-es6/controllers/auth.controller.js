import { User } from "../models/user.js";
import Jwt from "jsonwebtoken";
import { AppConfig } from "../config/app-config.js";
const { sign } = Jwt;

export class AuthController {
	static signup(req, res, next) {
		let m = new User.Collection();
		m.Email = req.body.Email;
		m.Password = req.body.Password;

		m.save((err, doc) => {
			if (err) {
				console.log(err);
			} else {
				res.send(doc);

			}
		});
	}

	static login(req, res, next) {
		let user = User.Collection.findOne({ Email: req.body.Email });
		// TODO: run npm i jsonwebtoken
		const token = sign({ _id: user._id }, AppConfig.Current.Secret, { expiresIn: '1d' });
		res.send({
			success: true,
			access_token: token,
			expiresin: '1d'
		});

		// TODO: npm i passport-jwt
	}
}
