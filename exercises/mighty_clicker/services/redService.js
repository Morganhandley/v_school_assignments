angular.module('clickerApp')

.service('redService', function () {
    
//    var self = this;
//    self.redScore = 100;

    this.increment = function (red) {
//        self.redScore++;
//        return self.redScore;
        red= red + 10;
        return red;
        
    }

    this.decrement = function (red) {
//        self.redScore--;
//        return self.redScore;
        red = red - 10;
        return red;
    }

    this.reset = function (red) {
//        self.redScore = 100;
//        return self.redScore;
        red = 100;
        return red;
    }
});