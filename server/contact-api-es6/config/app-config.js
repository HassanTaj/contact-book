import { default as dev_config } from './config.dev.js'
import { default as prod_config } from './config.prod.js'

export class AppConfigModel {
	constructor(options) {
		this.port = options?.port;
		this.env = options?.env;
		this.connection_string = options?.connection_string;
		this.secret = options?.secret;
	}

	static Init(options) {
		AppConfigModel.Port = options?.port;
		AppConfigModel.Env = options?.env;
		AppConfigModel.ConnectionString = options?.connection_string;
		AppConfigModel.Secret = options?.secret;
		return AppConfigModel;
	}

	static _port;
	static set Port(value) { this._port = value; }
	static get Port() { return this._port; }

	static env;
	static set Env(value) { this.env = value; }
	static get Env() { return this.env; }

	static connection_string;
	static set ConnectionString(value) { this.connection_string = value; }
	static get ConnectionString() { return this.connection_string; }

	static secret;
	static set Secret(value) { this.secret = value; }
	static get Secret() { return this.secret; }

}

export class AppConfig {
	static config_data = undefined;
	static getConfigData() {
		// if the static data was already set. return it
		if (!!this.config_data) {
			return this.config_data;
		}

		//LOAD JSON
		if (process.env.NODE_ENV === undefined || process.env.NODE_ENV == null || process.env.NODE_ENV == 'development') {
			this.config_data = dev_config;
		} else {
			if (process.env.NODE_ENV == 'production') {
				this.config_data = prod_config;
			}
		}
		//LOAD FROM ENV VARIABLES
		this.config_data.connection_string = process.env.connection_string || this.config_data.connection_string;
		this.config_data.port = process.env.port || this.config_data?.port

		return this.config_data;
	}

	static get Configuration() {
		return new AppConfigModel(this.getConfigData());
	}

	static get Current() {
		return AppConfigModel.Init(this.getConfigData());
	}
}
