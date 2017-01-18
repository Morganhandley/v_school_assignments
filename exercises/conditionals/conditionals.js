//var currentTime = 10;
//var wakeUpTime = 12;
//
//if (currentTime > wakeUpTime) {
//    alert("wake up! wake up");
//}
//
//if (myScore > highScore) {
//    console.log("You win!");
//}






//var input1 = parseInt prompt("Enter the first number");
//var input2 = prompt("Enter the second number"):
//
//
//
//    if (input1 > input2) {
//        console.log(input1 + "is the higher value");
//        else
//            console.log(input2 + "is the higher value");
//    }
//

//var num1 = 5;
//var num2 = 8;
//
//if (num1 < num2) {
//    console.log(num1 + " is the smallest number");
//    }
//    else if (num1 > num2) {
//        console.log(num2 + " is the smallest number");
//    }
//    else {console.log("They are equal"); 
//    }



    var aSmile = "true";
    var bSmile = "yes";

if (aSmile === true && bSmile === true) {
    console.log("both")
}
    //aSmile = aSmile.toLowerCase()
    //bSmile = bSmile.toLowerCase()
    //
    //if (aSmile.length === 3) {
    //    aSmile = true;
    //} else {
    //    aSmile = false;
    //}

    //if (aSmile.length === 3) {
    //    bSmile = true;
    //} else {
    //    bSmile = false;
    //}

    if (aSmile && bSmile) {
        console.log("WE ARE IN TROUBLE!!!");
        return true;
    } else if(!aSmile && !bSmile){
        console.log("WE ARE IN TROUBLE!!!");
        return true;
    }
    else {
        console.log("We are NOT in trouble!:");
        return false;
    }

    //            var timeOfDay = 700;
    //
    //
    //            if (timeOfDay > 0) {
    //                console.log('Good Morning');
    //                else if (timeOfDay > 1200 && < 1699)
    //                    console.log("Good Afternoon");
    //                else if (timeOFDay >= 1700 && timeOfDay <= 1159)
    //                    console.log("Good Evening");
    //            }

    //var d = new Date();
    //var d = new Date(milliseconds);
    //var d = new Date(dateString);
    //var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

var date = new Date();
var hour = date.getHours
