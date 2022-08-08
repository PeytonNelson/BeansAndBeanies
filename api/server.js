const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true},
  () => console.log('connected to db!'));


//Import Routes
app.use(express.json());

//R
app.use('/api/user', authRoute);

app.listen(5500, () => console.log('Server is Running'));

