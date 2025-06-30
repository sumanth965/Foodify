// models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    order: {
        type: [String],  // Array of strings to store order items
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('Order', contactSchema);
module.exports = Contact;
