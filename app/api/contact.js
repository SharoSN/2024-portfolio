// pages/api/contact.js

// Import nodemailer
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'sharo.s.n@hotmail.com', // Your email address
        pass: EMAIL_PASSWORD // Your email password
      }
    });

    // Email message configuration
    const mailOptions = {
      from: 'your_hotmail_email@example.com', // Sender email address
      to: 'sharo.s.n@hotmail.com', // Receiver email address
      subject: subject,
      text: `From: ${email}\n\n${message}`
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
