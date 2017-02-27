function addsUp(int, arr) {
    for (var i = 0; i <= arr.length; i++) {
        var sum = i + 1;
    }
    for (var j = 0; j <= arr.length; j++) {
        if (j + sum === int) {
            console.log('true');
        } else console.log('false');
    }
}


addsUp(10, [5, 1, 5]);


//addsUp(10, [5, 1, 5]);true
//addsUp(10, [2, 3, 1, 5]);true
//addsUp(10, [4, 2, 5]); false
