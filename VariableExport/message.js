
//import module
//const MessageMixer = require('./messageMixer.js');

//import default module
//import MessageMixer from './messageMixer';

//import using variables
import {countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurrence, replaceAllOccurrences, encode, palindrome, pigLatin} from './messageMixer';


function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t")); //1.
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?")); //2.
  console.log(reverseWord("What is the color of the sky?")); //3.
  console.log(reverseAllWords("What is the color of the sky?")); //4.
  console.log(replaceFirstOccurrence("What is the color of the sky?", "sky", "water")); //5.
  console.log(encode("What is the color of the sky?")); //7.
  console.log(palindrome("What is the color of the sky?")); //8.
  console.log(pigLatin("What is the color of the sky?", "ay ")); //9.
}

displayMessage();
