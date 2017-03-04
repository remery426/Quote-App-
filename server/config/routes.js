var user = require('./../controllers/users.js')
var quote = require('./../controllers/quotes.js')
module.exports = function(app){
    app.post('/login', function(req,res){
        console.log("you made it to the route")
        console.log(req.body)
        user.login(req, res)
    })
    app.get('/checkStatus', function(req,res){
        user.checkStatus(req,res)
    })
    app.post('/addQuote', function(req,res){
        quote.add(req,res)
    })
    app.get('/getAll', function(req,res){
        quote.getAll(req,res)
    })
    app.post('/like', function(req,res){
        console.log(req.body)
        quote.like(req,res)
    })
}