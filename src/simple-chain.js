const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === undefined ? "( )" : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || !((position-1) in this.chain) ){
      this.chain.length = 0;
      throw new Error('bad position');
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain.length = 0;
    return result;
  }
};

module.exports = chainMaker;
