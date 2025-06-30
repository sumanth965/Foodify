// controllers/contactController.js
const Contact = require('../models/contact');

const submitMessage = async (req, res) => {
    const { name, email, message, order } = req.body;
    try {
        const newContact = new Contact({
            name,
            email,
            message,            
            order
        });
        await newContact.save();
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ message: 'Error sending message' });
    }
};

module.exports = submitMessage;
  