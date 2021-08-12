const {  Schema, model } = require('mongoose');

const pieceSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    artistName:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    imgUrl:{
        type: String,
        required: true,
        unique: true
    },
    year:{
        type: String,
        required: true,
        unique: true
    },
    style:{
        type: String,
        required: true,
        unique: true
    },
})

const Piece = model('Piece', pieceSchema);

module.exports = Piece;