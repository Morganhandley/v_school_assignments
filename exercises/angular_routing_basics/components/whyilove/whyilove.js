angular.module('loveView', ['ngRoute'])

.config(function ($routeProvider) {
    $routeProvider.when('/love', {
        controller: 'loveController',
        templateUrl: 'components/whyilove/whyilove.html'
    });
})

.controller('loveController', function($scope) {
    $scope.love = 'Why I love Oregon';
});