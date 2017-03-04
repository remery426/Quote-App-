var mongoose = require('mongoose');
var Schema = mongoose.Schema 

var QuoteSchema = new Schema({
    author: {type:String},
    date: {type:Date},
    quote: {type:String}, 
    likes: {type:Number}
    
})

mongoose.model('Quote', QuoteSchema);