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


function average(a, b, c, d, e){
    var array = [a,b,c,d,e];
    var sum = a + b + c + d + e;
    
    var calculateAverage = sum / array;
    return calculateAverage;
}

console.log(average(77, 76, 85, 92, 100));