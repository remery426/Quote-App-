var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quote = mongoose.model("Quote")

module.exports = (function(){
    return{
        add:function(req,res){
            var quote = new Quote(req.body)
            quote.save()
            res.json(req.body)

        },
        getAll: function(req,res){
           Quote.find({}, function(err,data){
               console.log(data)
               res.json(data)
           }) 
        },
        like: function(req,res){
           Quote.findById({_id: req.body._id}, function(err,data){
               console.log("data",data.likes)
               if(!data.likes){
                   data.likes =1;
               }
               else{data.likes +=1 }
               data.save();
               res.json(data)
               
           })
        }
    }
})()

