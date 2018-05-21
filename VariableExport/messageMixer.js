//turn the behavior of messageMixer.js into a module. In this file, create a variable MessageMixer and set it equal to an empty object to represent the module as an object.
const MessageMixer = {};


//One by one, for each function in messageMixer.js, modify the function so that it is a property on the object.


//1.
function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count;
};


//2.
//splits the strings at " ", which splits the strings into words.
//let word = arr[0] is first word
//arr[0] = word[0].toUpperCase is the first letter of first word
//word.substring(1) is extracts characters starting at index 1
function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
  return arr.join(" ");
};


//3.
//splits between characters, reverse and then join with no spaces between
function reverseWord(word) {
  return word.split("").reverse().join("");
};


//4.
function reverseAllWords(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};


//5.
function replaceFirstOccurrence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


//6. extracts toBeReplaced and joings in the replaceWith
function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};



//7.
function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};


//8.
//create a function - use string concatenation or interpolation to return the string, a space, and the reverse of the string
function palindrome(str) {
  return `${str} ${reverseWord(str)}`;
};


//9.
//create a function -  return the sentence split at each of the spaces, and joined back together using the character argument concatenated with a ' '.
function pigLatin(sentence, character) {
  return sentence.split(' ').join(character + ' ');
};




//export using module
//module.exports = MessageMixer;

//export using default
//export default MessageMixer;

//export using variables
export {countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurrence, replaceAllOccurrences, encode, palindrome, pigLatin};
