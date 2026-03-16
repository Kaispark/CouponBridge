const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true,
        unique: true
    },
    customerPassword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Customer', customerSchema);