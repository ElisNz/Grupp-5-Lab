const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(express.json());

const customerRouter = require('./routes/customer');
app.use('/customer', customerRouter);

const cityRouter = require('./routes/city');
app.use('/city', cityRouter);

app.listen(3000);