var app = angular.module("myApp", ["ngRoute"])

app.controller("myController", function ($scope) {
    $scope.input = "enter word to translate";
    $scope.translation = "translated word"
    $scope.favorites = "list of favorites";
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
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

})


