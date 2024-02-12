// app.js

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
const port = 8000;

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/image-store', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for storing image information
const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
});

const Image = mongoose.model('Image', imageSchema);

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix); // Set a unique filename for each image
  },
});

const upload = multer({ storage: storage });

// Define a route for uploading images
app.post('/upload', upload.single('image'), async (req, res) => {
  const { filename, path } = req.file;

  // Save image information in MongoDB
  const image = new Image({ filename, path });
  await image.save();

  res.json({ message: 'Image uploaded successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
