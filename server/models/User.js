const {  Schema, model } = require('mongoose');
const { Piece } = require('./Piece');
// Have to search user by email


const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    faveArtist:{
        type: String,
        required: true,
        unique: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: false
    },
    artCollection:[ {
        type: Schema.Types.ObjectId,
        ref: Piece
    }]
})

const User = model('User', userSchema);

module.exports = User;