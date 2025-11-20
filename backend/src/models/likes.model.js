const mongoose = require('mongoose');  

const likesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food',
        required: true,
    },
}, { timestamps: true 

});

const Like = mongoose.model('Like', likesSchema);
module.exports = Like;
 