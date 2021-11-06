import mongoose from 'mongoose';
import chalk from 'chalk';
import { AppConfig } from '../config/app-config.js';

export class MongoConfig {
	static Init() {
		mongoose.connect(AppConfig.Current.ConnectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(() => {
			console.log(chalk.greenBright(`[db] ➡ connected 🔥`));
		}).catch(error => {
			console.log(chalk.redBright(`[db] ➡ couldn't connect  to  db ${error}`));
		});

		return mongoose;
	}
}