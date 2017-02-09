angular.module('clickerApp', [])



//.service('blueService', function () {
//    this.increment = function (blueScore) {
//        blueScore++
//        return blueScore;
//    }
//    this.decrement = function (blueScore) {
//        blueScore--
//        return blueScore;
//    }
//})

.controller('clickerController', function (redService, $scope) {

    $scope.redScore = 100;



    $scope.increment = function (redScore) {
        $scope.redScore = redService.increment(redScore);
    }

    $scope.decrement = function (redScore) {
        $scope.redScore = redService.decrement(redScore);
    }

//    $scope.reset = function (redScore) {
//            if ($scope.redScore <= 90) {
//                $scope.redScore = redService.reset(redScore);
//            }
//        })
    


    //    $scope.increment = function (blueScore) {
    //        $scope.blueScore = blueService.increment(blueScore);
    //    }
    //
    //    $scope.decrement = function (blueScore) {
    //        $scope.blueScore = blueService.decrement(blueScore);
    //    }
});