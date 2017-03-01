Array.prototype.bobsFilter = function(callback) {
    var array = this;
    var filteredItems = [];
    for (var i = 0; i < array.length; i++) {
        var iWantThisItemInMyFilteredArray = callback(array[i], i, array);

        // if the callback returns true
        if (iWantThisItemInMyFilteredArray) {
            
            // push the current item to a new array
            filteredItems.push(array[i]);
        }
            
    }
    // return the new array with all the stuff we added to it
    return filteredItems;
}

var myArray = [true, "Hello!", "hey", "kittens", false, true, 1, 2, "Hello!", 3, 4, 5, "fish", 6, 7, "Hello!"];

var stringsArray = myArray.bobsFilter(function(item) {
    if (typeof item === "number") {
        return true;
    } else {
        return false;
    }
});

console.log(stringsArray);