import cors from 'cors';
import chalk from 'chalk';
import { AppConfig } from './config/app-config.js';
import express, { urlencoded, json } from 'express';
import { BaseRouter } from './routes/index.route.js';
import { AppMiddleware } from './middleware/index.middleware.js';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// app.use(cors({ origin: '*' }));
app.use(cors());

// middleware
AppMiddleware.Init(app);

app.listen(AppConfig.Current.Port, () => {
    console.log(`${chalk.greenBright(`[api] ➡ `)} ${chalk.blueBright(`http://localhost:${AppConfig.Current.Port}/api`)}`);
});

app.use('/api', BaseRouter.Init())
