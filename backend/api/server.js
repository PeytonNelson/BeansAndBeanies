require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('../config/corsOptions');
const dbConnect = require('../config/dbConnect');
const credentials = require('../middleware/credentials');
const cookieParser = require('cookie-parser');
const verifyToken = require('./routes/verifyToken');
const PORT = process.env.PORT;


//Connect to DB
dbConnect();

app.use(credentials);

app.use(cors(corsOptions));

//Import Routes
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/newUser'));
app.use('/login', require('./routes/login'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use(verifyToken);

//


app.listen(PORT, () => console.log('Server is Running'));

