const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const mongoose = require('mongoose');

config();

const rootRouter = require('./router/router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',rootRouter);

const { PORT=5000,DB_URI } = process.env;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Successfully connected to Mongo DB');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});