/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
    
    // Convert sentence into array of words
    var resultingArray = str.split(" ");
    var maxLength = 0;

    for(var i = 0; i < resultingArray.length; i++) {
        if(resultingArray[i].length > maxLength) {
            maxLength = resultingArray[i].length;
        }
    }

    return maxLength;

}

findLongestWord("The quick brown fox jumped over the lazy dog");