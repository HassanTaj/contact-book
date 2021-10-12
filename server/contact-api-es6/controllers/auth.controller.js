import UserModule from "../models/user.js";
const { User } = UserModule;
import Jwt from "jsonwebtoken";
const { sign } = Jwt;

export default {
	signup: (req, res, next) => {
		let m = new User();
		m.Email = req.body.Email;
		m.Password = req.body.Password;

		m.save((err, doc) => {
			if (err) {
				console.log(err);
			} else {
				res.send(doc);

			}
		});
	},
	login: (req, res, next) => {
		let user = User.findOne({ Email: req.body.Email });
		// TODO: run npm i jsonwebtoken
		const token = sign({ _id: user._id }, 'this is my secret shit', { expiresIn: '1d' });
		res.send({
			success: true,
			access_token: token,
			expiresin: '1d'
		});

		// TODO: npm i passport-jwt
	}
}