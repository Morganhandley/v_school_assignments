angular.module("App")

.service('myService', ["$http", function ($http) {

    this.getData = function () {
        $http.get("https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20170312T025504Z.0c1d284c46f94c74.e2ea41fb974aa9567f52a60d50ed584d37c8c3b5&text=hello&lang=en-ru&[format=plain]").then(function (response) {
            console.log(response);
        })
    }







}])

}