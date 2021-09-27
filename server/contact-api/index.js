const express = require('express');
const cors = require('cors');
const baseRouter = require('./routes/index.route');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: '*' }));

const port = 5000;
app.listen(port, () => {
    console.log(`Server 🚀 on port : ${port}`);
});

app.use('/api', baseRouter)
