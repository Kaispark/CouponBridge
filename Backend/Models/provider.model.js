const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    providerName: {
        type: String,
        required: true
    },
    providerEmail: {
        type: String,
        required: true,
        unique: true
    },
    providerPassword: {
        type: String,
        required: true
    },
    ProviderRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 6
    }

}, { timestamps: true });

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;