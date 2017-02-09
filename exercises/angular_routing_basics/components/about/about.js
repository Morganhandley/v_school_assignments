angular.module('aboutView', ['ngRoute'])

.config(function ($routeProvider) {
    $routeProvider.when('/about', {
        controller: 'aboutController',
        templateUrl: 'components/about/about.html'
    });
})

.controller('aboutController', function($scope) {
    $scope.about = 'about';
});