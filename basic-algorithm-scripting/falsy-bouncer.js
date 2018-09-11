/*

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

*/

function bouncer(arr) {

    var filteredArray = arr.filter((value) => {
        if(Boolean(value)) {
            return value;
        }
    });

    return filteredArray;

}

bouncer([7, "ate", "", false, 9]);