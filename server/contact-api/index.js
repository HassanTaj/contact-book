const express = require('express');
const cors = require('cors');
const mongoose = require('./mongoose.js');
const contactsApi = require('./routes/contacts');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: '*' }));

const port = 5000;
app.listen(port, () => {
    console.log(`Server 🚀 on port : ${port}`);
});

app.use('/api/contacts', contactsApi)
