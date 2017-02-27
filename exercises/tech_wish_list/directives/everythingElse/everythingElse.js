angular.module('myApp')

.directive('computerPhone', function {
    return {
        template.url:
            scope: {
                device: "="
            };
    }
})
