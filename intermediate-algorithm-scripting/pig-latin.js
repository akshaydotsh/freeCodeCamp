/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word 
and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {
   
    var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 
    'V', 'W', 'X', 'Y', 'Z'];
    
    var vowels = ['A','E','I','O','U'];

    var strArray = str.split("");
    var suffix = (vowels.indexOf(str.substr(0,1).toUpperCase()) === -1) ? "ay" : "way";

    for(var i = 0; i < strArray.length; i++) {
        if (consonants.indexOf(strArray[i].toUpperCase()) === -1) {
            break;
        }
        str = str.substr(1) + str.substr(0,1);        

    }

    str += suffix;

    return str;

    
}

translatePigLatin("glove");
