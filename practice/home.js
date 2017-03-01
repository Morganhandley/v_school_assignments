angular.module("homeView", [ngRoute])

.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'homeController',
            templateUrl: 'home.html'
        });
})

.controller('homeController', function($scope) {
    $scope.name = 'Oregon';
});