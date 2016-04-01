var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var Instrument = Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: {type: Object, required: true},
    subtype: {type: Object, required: true},
    price: { type: Number, required: true },
    picture: {type: String, required: true},
    pictwo: {type: String, required: false},
    picthree:{type:String, required: false},
    info: {type: String, required: true },
    
    
})

module.exports = mongoose.model('Instrument', Instrument);