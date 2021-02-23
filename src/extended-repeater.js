const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let retStr = '';
  if (!options.separator){
      options.separator = "+";
  }
  if (!options.additionSeparator){
      options.additionSeparator = "|";
  }
  if(!options.repeatTimes){
      options.repeatTimes = 1;
  }
  if(!options.additionRepeatTimes){
      options.additionRepeatTimes = 1;
  }
      for (let i = 1; i <= options.repeatTimes; i++){
          retStr += `${str}`;
          if(options.hasOwnProperty('addition')){
              for (let j = 1; j <= options.additionRepeatTimes; j++){
                  retStr += `${options.addition }`;
                  if(j < options.additionRepeatTimes){
                      retStr += options.additionSeparator;
                  }
              }
          }
          if(i < options.repeatTimes){
              retStr += options.separator;
          }      
      }
  return retStr;  
};