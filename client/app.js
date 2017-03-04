var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/logreg.html'
    })
    .when('/dash',{
        templateUrl: 'partials/dash.html'
    })
    .when('/AddPage',{
        templateUrl: 'partials/AddPage.html'
    })
    .when('/ShowPage',{
        templateUrl: 'partials/ShowPage.html'
    })
    .when('/User/:author',{
        templateUrl: 'partials/User.html'
    })
    .otherwise({
        templateUrl: 'partials/logreg.html'
    })
})