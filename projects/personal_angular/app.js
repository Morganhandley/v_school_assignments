var app = angular.module("myApp", ["ngRoute"])

app.controller("myController", function ($scope, $http) {
    $scope.home1 = "Use this website to translate words into a different language";
    $scope.home2 = '(Just hit the green "Translate" button and have fun!)';
    $scope.translation = "enter a word, then select languages to be translated from and to";
    $scope.favorites = "list of favorites";
    $scope.getLanguage = function(){
        
    }
})

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: "myController"
        })
        .when("/translate", {
            templateUrl: "translate.html",
            controller: "myController"
        })
        .when("/favorites", {
            templateUrl: "favorites.html",
            controller: "myController"
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);


