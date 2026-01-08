require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
      console.error('❌ MongoDB Connection Error:', err);
      process.exit(1); // Exit if DB fails
  });

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio Backend is Running');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, job, phone, email, message } = req.body;

    const newMessage = new Message({
      name,
      job,
      phone,
      email,
      message
    });

    await newMessage.save();

    res.status(201).json({ success: true, message: 'Your message has been received!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
