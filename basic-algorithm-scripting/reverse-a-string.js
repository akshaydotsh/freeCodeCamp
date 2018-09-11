/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {

    var splitArray = str.split("");
    // ["h", "e", "l", "l", "o"]

    var reversedArray = splitArray.reverse();
    // ["o", "l", "l", "e", "h"]

    return reversedArray.join("");
    //  olleh
}

reverseString("hello");