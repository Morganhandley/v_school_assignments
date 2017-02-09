angular.module('routingApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl:"components/home/home.html",
        controller: "HomeController"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);


