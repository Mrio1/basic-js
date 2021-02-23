const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
      this.maxDepth = 1
  }
  calculateDepth(arr, currentDepth = 1, maxDepth = 1) {
       for (let value of arr){
           if(Array.isArray(value)){
              this.calculateDepth(value, currentDepth+1);   
          }
      }
      if (currentDepth > this.maxDepth){
          this.maxDepth = currentDepth;
      }   
      return this.maxDepth;
  }
};
