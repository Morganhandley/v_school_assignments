angular.module('clickerApp', [])

.controller('clickerController', ['$scope', 'redService', 'blueService', function ($scope, redService, blueService) {

    $scope.redScore = 100 //redService.redScore;
    $scope.blueScore = 100 //blueService.blueScore;


    $scope.changeRed = function (red, blue) {

        var newRed = redService.increment(red);
        var newBlue = blueService.decrement(blue);
        if (newBlue === 0) {
            newBlue = blueService.reset(blue)
        }

        $scope.redScore = newRed;
        $scope.blueScore = newBlue;

    }

    $scope.changeBlue = function (blue, red) {
        var newBlue = blueService.increment(blue);
        var newRed = redService.decrement(red);
        if (newRed === 0) {
            newRed = redService.reset(red);
        }
        $scope.redScore = newRed;
        $scope.blueScore = newBlue;

    }
}]);