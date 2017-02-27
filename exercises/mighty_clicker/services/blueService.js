angular.module('clickerApp')

.service('blueService', function () {
    
//    var self = this;
//    self.blueScore = 100;
    
    this.increment = function (blue) {
//        self.blueScore++;
//        return self.blueScore;
        blue = blue + 10;
        return blue;
    }
    
     this.decrement = function (blue) {
        blue = blue - 10;
        return blue;
        
    }
      this.reset = function (blue) {
//        self.blueScore = 100;
//        return self.blueScore;
          blue = 100;
          return blue;
    }
})

