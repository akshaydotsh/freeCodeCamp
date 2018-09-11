/*

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
but do pass them on.

*/

function rot13(str) { // LBH QVQ VG!

    var charCodeArr = [];
    var strArray = str.split("");
    var res = '';

    for (var i = 0; i < strArray.length; i++) {
        charCodeArr.push(str.charCodeAt(i));
    }

    var newCharCodeArr = charCodeArr.map((value) => {
        if(value >= 65 && value <= 90) {
            if(value > 77) {
                return 64 + (value - 77);
            }
            return value+13;
        }

        return value;
    });
    
    for (var i = 0; i < newCharCodeArr.length; i++) {
        res += String.fromCharCode(newCharCodeArr[i]);
    }

    return res;

}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
