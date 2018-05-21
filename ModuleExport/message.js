
//import module
//const MessageMixer = require('./messageMixer.js');

//import default module
import MessageMixer from './messageMixer';


function displayMessage() {
  console.log(MessageMixer.countCharacter("What is the color of the sky?", "t")); //1.
  console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?")); //2.
  console.log(MessageMixer.reverseWord("What is the color of the sky?")); //3.
  console.log(MessageMixer.reverseAllWords("What is the color of the sky?")); //4.
  console.log(MessageMixer.replaceFirstOccurrence("What is the color of the sky?", "sky", "water")); //5.
  console.log(MessageMixer.encode("What is the color of the sky?")); //7.
  console.log(MessageMixer.palindrome("What is the color of the sky?")); //8.
  console.log(MessageMixer.pigLatin("What is the color of the sky?", "ay ")); //9.
}

displayMessage();
