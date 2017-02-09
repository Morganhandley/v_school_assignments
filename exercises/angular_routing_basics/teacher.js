angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "components/about/about.html",
            controller: "AboutController"
        })
        .when("/contact", {
            templateUrl: "components/contact/contact.html",
            controller: "ContactController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);
