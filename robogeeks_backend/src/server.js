const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable CORS for cross-origin requests (useful for development)
app.use(cors());

// Setup multer to store uploaded files in the "uploads" directory
const upload = multer({ dest: "uploads/" });

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Make sure to set this in your .env file
    pass: process.env.EMAIL_PASS, // Make sure to set this in your .env file
  },
});

// Form submission handler with file uploads
app.post("/upload", upload.array("files"), (req, res) => {
  const { name, email, phone } = req.body;
  const files = req.files;

  // Validate required fields
  if (!name || !email || !phone) {
    return res
      .status(400)
      .json({ message: "Name, email, and phone are required" });
  }

  // Validate if files are uploaded
  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  // Prepare email with attachments
  const attachments = files.map((file) => ({
    filename: file.originalname,
    path: file.path,
  }));

  const mailOptions = {
    from: email, // Sender's email
    to: email, // Admin's email (set in .env)
    subject: "New File Upload with Form Details",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n`,
    attachments: attachments, // Attach uploaded files
  };

  // Send the email with attachments
  transporter.sendMail(mailOptions, (error, info) => {
    // Clean up uploaded files after sending the email
    files.forEach((file) => {
      fs.unlink(file.path, (err) => {
        if (err) console.error(err);
      });
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Error sending email" });
    }

    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Files and details sent successfully" });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
