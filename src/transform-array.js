const CustomError = require("../extensions/custom-error");

module.exports = function transform(inputArr) {
  if(!Array.isArray(inputArr)){
    throw new Error();
  }
  const arr = [...inputArr];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev': 
        if (arr[i - 1]!== null && i>0 ) {
          arr.splice(i-1, 2, null);
        } else {
          arr.splice(i,1)
        }
        break;
      case '--discard-next': 
        if (arr[i + 1]!== null && i != arr.length - 1) {
          arr.splice(i, 2, null);
        } else {
          arr.splice(i,1)
        }
        break;
      case '--double-next': 
        if (arr[i + 1]!== null && i != arr.length - 1) {
          arr.splice(i, 1, arr[i+1]);
        } else {
          arr.splice(i,1)
        }
        break;
      case '--double-prev': 
        if (arr[i - 1]!== null && i > 0) {
          arr.splice(i, 1, arr[i-1]);
        } else {
          arr.splice(i,1)
        }
        break;
    }
      
  }
  return arr.filter((item)=> item!== null);
}
