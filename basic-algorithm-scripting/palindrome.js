/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {

    // Remove special characters and numbers , split the resulting string into array
    // apply map function to convert each element to lower case
    var resultingArray = str.replace(/[^a-zA-Z0-9]/g, '').split("").map(function (each) {
        return each.toLowerCase();
    });

    // length of resulting arrray
    var arrayLength = resultingArray.length;
    var mid = (arrayLength % 2 == 0) ? (arrayLength / 2) - 1 : (arrayLength - 1) / 2;

    for(var i = 0;i <= mid; i++){
        if (resultingArray[i] != resultingArray[arrayLength-i-1]) {
            return false;
        }
    }
    return true;
}

palindrome("eye");