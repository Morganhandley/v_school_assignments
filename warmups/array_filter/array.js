//var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];
//
//var noLargeNumbers =  numericArray.myFilter(function (element) {  
//  return element <= 5;
//});
//
//console.log(noLargeNumbers);  
//
//
//
//Array.prototype.myFilter = function (callback) {  
//  var array = this;
//  // your code here
//};




//var variousIntegers = [0, 1, 2, 3, 4, 0, 5, 6, 7, 0, 8, 9, 0, 8, 7, 6, 0, 5, 0, 4, 3, 2, 1, 0, 2, 3, 4, 5, 0, 6, 7, 8, 9];
//
//var noOnesOrZeros = variousIntegers.filter(function (element) {
//    return element !== 0 && element !==1 && element !==2 && element !==3 && element !==4;
//});
//
//console.log(noOnesOrZeros);
//








//function isBigEnough(value) {
//  return value >= 10;
//}
//
//var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//// filtered is [12, 130, 44]
//
//
//Array.prototype.filter = function(callback)
//
//
//var ourArray = ["pan", "can", "apple", "sauce"];
//
//
//
//ourNewArray = ourArray.filter(function(){
//    
//    
//    
//    return item.length < 4;
//})
//
//console.log(ourArray);




var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var takeOutEvens = myArray.filter(funtion (element) {
        if (element > 2)
            return true;
        else
            return false;

});
console.log(takeOutEvens);

//
//var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];
//
//var filteredArray = numericArray.filter(function (element) {  
//  if (element > 5)
//    return false;
//  else
//    return true;
//});
//
//console.log(filteredArray); 













