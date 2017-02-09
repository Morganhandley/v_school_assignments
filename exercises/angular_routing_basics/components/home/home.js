angular.module('homeView', ['ngRoute'])

.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        controller: 'homeController',
        templateUrl: 'components/home/home.html'
    });
})

.controller('homeController', function($scope) {
    $scope.name = 'Oregon';
});