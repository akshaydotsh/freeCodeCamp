/*

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {

    var splitArray = str.split(" ");
    // [ 'I\'m', 'a', 'little', 'tea', 'pot' ]

    var result = splitArray.map(function (word) {

        // convert each array element (word) to lowercase
        // and further split is into array
        var lowercaseArray = word.toLowerCase().split("");

        // Convert first letter of array (word) to upper case
        lowercaseArray[0] = lowercaseArray[0].toUpperCase();

        // join to form a single word and return
        return lowercaseArray.join("");

    });
    // [ 'I\'m', 'A', 'Little', 'Tea', 'Pot' ]


    return result.join(" ");
    // I'm A Little Tea Pot

}

titleCase("I'm a little tea pot");
