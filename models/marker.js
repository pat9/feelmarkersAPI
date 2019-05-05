const mongoose = require('mongoose');
const { Schema } = mongoose;

const MarkerSchema = new Schema({
    id_user:{type:String, required:true},
    title: {type:String, required:true},
    description: {type:String,required:true},
    emotion:{type:Number,required:true},
    lat:{type:Number,required:true},
    long:{type:Number,required:true}
})

module.exports = mongoose.model('Marker',MarkerSchema);