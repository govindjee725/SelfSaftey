const express = require('express');
const cors = require('cors');
const { sendLocationMessage } = require('./twilio');
const mongoose = require('mongoose');
 // Twilio module
// const { generateChatResponse } = require("./utils/openai");

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
// Restrict CORS in production
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI,)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
// Health Check Endpoint
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Server is running!' });
});

// Test Endpoint
app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'Backend is connected!' });
});

// SOS Alert Endpoint
app.post('/api/send-sos', async (req, res) => {
  const { latitude, longitude, phone } = req.body;

  if (!latitude || !longitude || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input data. Latitude, longitude, and phone are required.',
    });
  }

  try {
    const response = await sendLocationMessage(phone, latitude, longitude);
    res.json({
      success: true,
      message: 'SOS alert sent successfully!',
      data: response,
    });
  } catch (error) {
    console.error('Error sending SOS:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to send SOS alert.',
      error: error.message,
    });
  }
});

// // Chat API Endpoint
// app.post("/chat", async (req, res) => {
//   const { message } = req.body;

//   try {
//     const reply = await generateChatResponse(message);
//     res.json({ reply });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to generate response" });
//   }
// });
app.use('/api/incidents', require('./routes/incident'));
app.use('/api/incidents', require('./routes/incident'));


// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
