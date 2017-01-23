//
//    
//    
//function compareInputs(input1, input2){
//    var input1 = 10;
//    var input2 = 2;
//    if (input1 < input2)
//        return input1;
//    
//    else return input2;
//    
//}
//
//console.log(compareInputs());


//function monkeyTrouble(smileA, smileB) {
//    if (smileA === smileB)
//        return "We're in trouble";
//    else return "We're safe!"
//}
//
//console.log(monkeyTrouble(true, false))



var d = new Date();
//var timeOfDay = d.getHours() ;
var timeOfDay = 12;
console.log(timeOfDay);

function alphaTheTime() {
    if (timeOfDay <= 11) {
        return "Good Morning";
    } else
    if (timeOfDay <= 16) {
            return "Good Afternoon";
    } else
    if (timeOfDay <= 24) {
                return "Good Evening";
    }

        
    
}
    console.log(alphaTheTime(timeOfDay));