app.factory('userFactory', function($http, $location, $route){
    var factory = {};
    factory.login = function(user){
        
        console.log(user)
        $http.post('/login', user).then(function(output){
            {
                
                if(output.data){
                    console.log("We back")
                    $location.url("/dash")
                }
            }

        })
    }
        factory.checkStatus = function(cb){
            $http.get('/checkStatus').then(function(output){
            if(!output.data){
                
                $location.url('/')
            }else{
                cb(output.data)
            }
            })
        }
    return factory 

})