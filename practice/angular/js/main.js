var myApp = angular.module("myApp, []");

app.run(function ($rootScope) {
    $rootScope.name = "Morgan Handley"
})

app.controller('ParentController', function ($scope) {
    $scope.person = {
        greeted: false
    };
});

app.controller('ChildController', function ($scope) {
    $scope.sayHello = function() {
        $scope.person.greeted = true;
    }
});