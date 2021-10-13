import express, { urlencoded, json } from 'express';
import cors from 'cors';
import mongoose from './mongoose.js';
import baseRouter from './routes/index.route.js';
import { Configure } from './middleware/global-middleware.js';
import passport from 'passport';
import multer from 'multer';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// app.use(cors({ origin: '*' }));
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Headers', "*");
//     res.setHeader('Access-Control-Allow-Origin',
//         'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods',
//         'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//     next();
// })

app.use(passport.initialize());
Configure(app);


const port = 5000;
app.listen(port, () => {
    console.log(`Server 🚀 on port : ${port}`);
});

app.use('/api', baseRouter)
