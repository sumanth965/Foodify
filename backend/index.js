const express = require('express');
const RunServer = require('./database/connection'); // Automatically connects to MongoDB
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');      // Cross-Origin Resource Sharing
const helmet = require('helmet');  // Security headers

const app = express();
const port = 3000;

// Connect to MongoDB
RunServer();

// Middleware
app.use(express.json()); // Parse incoming JSON
app.use(cors());         // Allow requests from other origins
app.use(helmet());       // Basic security

// API Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1', contactRoutes);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
