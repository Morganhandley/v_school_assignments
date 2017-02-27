angular.module('cartoonApp', [])

.controller('cartoonController', [ '$scope', 'storeAndPostService', function($scope, storeAndPostService) {
    $scope.postEntry = storeAndPostService(inUrl, inTitle, inDescription)
    $scope.cartoonList = storeAndPostService;
}])