const express = require('express');
const cors = require('cors');
const mongoose = require('./mongoose');
const baseRouter = require('./routes/index.route');
const middleware = require('./middleware/global-middleware');
const passport =  require('passport');
const multer = require('multer');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: '*' }));

app.use(passport.initialize());
middleware.Configure(app);


const port = 5000;
app.listen(port, () => {
    console.log(`Server 🚀 on port : ${port}`);
});

app.use('/api', baseRouter)
