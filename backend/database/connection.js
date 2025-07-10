const mongoose = require('mongoose');
require('dotenv').config();

function RunServer() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
}

module.exports = RunServer;
