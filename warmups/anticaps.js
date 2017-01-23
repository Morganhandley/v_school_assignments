function antiCaps(inputString) {
    var outputString = "";
            for (var i = 0; i < inputString.length; i++) {
            if isCaps(inputString[i]) {
                outputString += inputString [i].toLowerCase();
            else {
                outputString += inputString [i].toUpperCase();
            }
                return cout;
            }

            }
    }

function isCaps(letter) {  
  return letter === letter.toUpperCase();
}


    //
    //antiCaps('Hello') // hELLO  
    //antiCaps('racEcar') // RACeCAR  
    //antiCaps('bAnAnA') // BaNaNa