const mongoose = require('mongoose');
require('dotenv').config();

async function RunServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI); // Clean and modern
        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    }
}

module.exports = RunServer;
