const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/iot-data'
, { useNewUrlParser: true, useUnifiedTopology: true });

// Event listener for MongoDB connection error
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
  process.exit(0); // Exit the application on connection error
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use(cors());
app.use(express.json());

// Import and use the API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
