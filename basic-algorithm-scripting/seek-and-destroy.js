/*

You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value 
as these arguments.

*/


function destroyer(arr) {

    for(var i = 1; i < arguments.length; i++) {

        arr = arr.filter((value) => {
            
            if(arguments[i] != value) return value;

        });

    }

    return arr;

}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);