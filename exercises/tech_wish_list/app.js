angular.module('myApp', [])

.controller('computerPhoneController', ['$scope', function ($scope) {

    $scope.gadgetComputerOrPhone = [
        {
            isComputer: true,
            type: 'Tablet',
            name: 'Kindle Fire',
            brand: 'Amazon',
            price: '$60'
        },
        {
            isComputer: true,
            type: 'Laptop',
            name: 'Asus Extreme',
            brand: 'Asus',
            price: '$400'
        },
        {
            isComputer: false,
            type: 'Smartphone',
            name: 'Galaxy',
            brand: 'Samsung',
            price: '$600'
        },

    ]

}])



.controller('everythingElseController', ['$scope', function ($scope) {

    $scope.gadgetEverythingElse = [
        {
            type: 'Smart watch',
            name: 'Apple watch',
            brand: 'Apple',
            price: '$600'
        },
        {
            type: 'time travel',
            name: 'flux-capacitor',
            brand: 'Doc Brown',
            price: '$350'
        },
        {
            type: 'Programmable Circuit Board',
            name: 'Pi',
            brand: 'Raspberry',
            price: '$250'
        },

    ]

}])



