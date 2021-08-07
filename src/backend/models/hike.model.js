const mongoose = require('mongoose');

const Schema = mongoose.Schema


const hikeSchema = new Schema(
    {
        name:String,
        parkingLot:String,
        trailStatus:String,
        bearSighting:String

    }
);

module.exports = hikeSchema;
