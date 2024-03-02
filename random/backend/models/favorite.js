// Require the Mongoose package
const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema(
    {
        factId: {type: String, required: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Favorite', favoritesSchema);