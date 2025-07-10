const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

const RunServer = require('./database/connection');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Use port from .env or fallback to 3000
const port = process.env.PORT || 3000;

// Connect to MongoDB
RunServer();

// Middleware
app.use(express.json());        // Parse incoming JSON
app.use(cors());                // Enable Cross-Origin Resource Sharing
app.use(helmet());              // Set security-related HTTP headers

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1', contactRoutes);

// Start server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
