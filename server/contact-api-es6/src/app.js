import cors from 'cors';
import chalk from 'chalk';
import { AppConfig } from './config/app-config.js';
import express, { urlencoded, json } from 'express';
import { BaseRouter } from './routes/index.route.js';
import { AppMiddleware } from './middleware/index.middleware.js';

const app = express();

// enable url encoding
app.use(urlencoded({ extended: true }));

// enable json
app.use(json());


// enable cross origin resource sharing
app.use(cors()); // app.use(cors({ origin: '*' }));

// middleware
AppMiddleware.Init(app);

// enable static files
app.use('/media', express.static('media'))

// configure app port and entry point
app.listen(AppConfig.Current.Port, () => {
    console.log(`${chalk.greenBright(`[api] ➡ `)} ${chalk.blueBright(`http://localhost:${AppConfig.Current.Port}/api`)}`);
});

// configure base routes
app.use('/api', BaseRouter.Init())
