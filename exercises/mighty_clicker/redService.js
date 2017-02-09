angular.module('clickerApp')

.service('redService', function () {
    this.increment = function (redScore) {
        redScore++
        return redScore
        if (redScore === 90) {
            this.reset(redScore);
        }
    }
    this.decrement = function (redScore) {
        redScore--
        return redScore;
    }
    this.reset = function (redScore) {
        redScore = 100
        return redScore;
    }
}
})