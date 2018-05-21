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


function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t")); //1.
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?")); //2.
  console.log(reverseWord("What is the color of the sky?")); //3.
  console.log(reverseAllWords("What is the color of the sky?")); //4.
  console.log(replaceFirstOccurrence("What is the color of the sky?", "sky", "water")); //5.
  console.log(encode("What is the color of the sky?")); //7.
}

displayMessage();
