const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode){
      this.mode = mode;
  }

  encrypt (message, key) {
      if(arguments.length < 2){
          throw Error();
      }
      message = message.toUpperCase();
      key = key.toUpperCase();
      let keyStr = '';
      let newStr = '';
      let spaceShift = 0;

      for (let i =0; i < Math.ceil(message.length / key.length); i++){
          keyStr += key;
      }

      for (let i = 0; i < message.length; i++){
          if(message[i].charCodeAt(0) < 65 || message[i].charCodeAt(0) > 90){
              newStr += message[i];
              spaceShift++;
              continue
          } else {
              let newLetterCode = ((message.charCodeAt(i) + keyStr.charCodeAt(i - spaceShift)-130)% 26) + 65;
              newStr += String.fromCharCode(newLetterCode);
          }

      }
      if (this.mode === false) {
          return newStr.split('').reverse().join('');     
      }
      return newStr;
  }

  decrypt (message, key) {
      if(arguments.length < 2){
          throw Error();
      }
      message = message.toUpperCase();
      key = key.toUpperCase();
      let keyStr = '';
      let newStr = '';
      let spaceShift = 0;

      for (let i =0; i < Math.ceil(message.length / key.length); i++){
          keyStr += key;
      }
      
      for (let i = 0; i < message.length; i++){
          if(message[i].charCodeAt(0) < 65 || message[i].charCodeAt(0) > 90){
              newStr += message[i];
              spaceShift++;
              continue;
          } else {
              let newLetterCode = ((message.charCodeAt(i) - keyStr.charCodeAt(i - spaceShift) + 26) % 26) + 65;
              newStr += String.fromCharCode(newLetterCode)
          }

      }
      if (this.mode === false) {
          return newStr.split('').reverse().join('');
      }
       return newStr;
  }
}

module.exports = VigenereCipheringMachine;
