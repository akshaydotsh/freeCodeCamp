/*
We'll pass you an array of two numbers. Return the sum of those two numbers and 
all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {

    var min = (arr[0] > arr[1]) ? arr[1] : arr[0];
    var max = (arr[0] < arr[1]) ? arr[1] : arr[0];

    var array = [];
    for (var i = min; i <= max; i++) {

        array.push(i);

    }

    var result = array.reduce(function (accumulator, currentValue) {

        return accumulator + currentValue;

    });

    return result ;

}

sumAll([1, 4]);