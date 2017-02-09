angular.module('yodaSpeak', [])

.controller('myController', ["$scope", "$http", function($scope, $http) {

    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    $scope.translate = function(newPhrase) {
            console.log(newPhrase);
        $http.get("https://yoda.p.mashape.com/yoda?sentence=" + newPhrase, config)
            .then(function (response) {
                $scope.results = response.data;
            })
    }
    }]);


