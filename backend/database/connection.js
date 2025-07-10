const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

function RunServer() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected');
    } catch (error) {
        console.log(error.message);
    }
}

