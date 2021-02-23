const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
      return false;
  }
  let outArray = [];
  members.forEach(element => {
      if(typeof element === 'string'){
          outArray.push(element.trim().toUpperCase()[0]);
      }
  });
  return outArray.sort().join('');
};