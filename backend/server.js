const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const hikesRouter = require('./routes/hikes');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri)
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useCreateIndex:true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
app.use('/hikes', hikesRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})