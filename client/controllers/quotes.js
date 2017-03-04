app.controller('quoteController', function($scope, quoteFactory, userFactory, $routeParams, $route){
    
    quoteFactory.getAll(function(data){
        $scope.user_quotes =[]
        $scope.all_quotes =data;
        $scope.quotes_author = $routeParams.author;
        console.log($scope.quotes_author)
        if($routeParams){
            for(var i = 0; i <$scope.all_quotes.length; i++){
                if($scope.all_quotes[i].author==$routeParams.author){
                    $scope.user_quotes.push(($scope.all_quotes[i]));
                }
            }
            console.log($scope.user_quotes)

        }

    })
    $scope.addQuote = function(){
    if(!$scope.quote.quote||!$scope.quote.author || !$scope.quote.author){
        alert("all fields mandatory!")
    }
    else{
        $scope.quote.likes = 0;
        quoteFactory.addQuote($scope.quote)
    }

    }
        $scope.like = function(quote){
        quoteFactory.like(quote);
}   
})