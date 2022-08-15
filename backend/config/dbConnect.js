const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
       await mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true});
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnect;

