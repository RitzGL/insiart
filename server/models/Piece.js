const {  Schema, model } = require('mongoose');

// Perhaps adding pieces will be part of release 2
// the data structure may look different. 

const pieceSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    artistName:{
        type: String,
        required: true,
        unique: false
    },
    description:{
        type: String,
        required: true,
        unique: false
    },
    imgUrl:{
        type: String,
        required: true,
        unique: false
    },
    year:{
        type: String,
        required: true,
        unique: false
    },
    style: {
        type: String,
        required: true,
        unique: false
    }
})

const Piece = model('Piece', pieceSchema);

module.exports = Piece;