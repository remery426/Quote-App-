app.factory('quoteFactory', function($http, $location, $route){
    var factory = {};
    factory.addQuote = function(quote){
        $http.post('/addQuote', quote).then(function(output){
            console.log(output.data)
            $route.reload();
        })
 
    }
    factory.getAll = function(cb){
        $http.get('/getAll').then(function(output){
            console.log(output.data)
            cb(output.data)
        })
        }
    factory.like = function(quote){
        console.log("quote in factory", quote)
        $http.post('/like', quote)
        $route.reload();
    }
    return factory 

})