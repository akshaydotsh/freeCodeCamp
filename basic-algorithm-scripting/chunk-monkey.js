/*

Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {

    var result = [];
    var arlen = arr.length;
    var loopTill = (arlen % size === 0) ? arlen - size + 1 : arlen - (arlen % size);

    for (var i = 0; i <= loopTill; i += size) {
        if (i + size > arlen) {
            result.push(arr.slice(i));
        }
        else {
            result.push(arr.slice(i, i + size));
        }
        
    }

    return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
