const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const db = require('./db_context.js');
const Locations = require('./model.js');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
