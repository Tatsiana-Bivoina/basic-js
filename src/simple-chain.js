import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 let chain = [];
export default {
  chain: chain,
  getLength() {
    this.chain.length;
    return this;
  },
  addLink( value ) {
    this.chain = chain.push('( ' + value + ' )');
    return this;
  },
  removeLink( position ) {
    // if(isNaN(position)){
    //   chain = [];
    //   throw new Error("You can\'t remove incorrect link!");
    // }
    // if(position <= 0 || position > this.getLength()){
    //   chain = [];
    //   throw new Error("You can\'t remove incorrect link!");
    // }
    if(!isNaN(position) && position > 0){
      this.chain = chain.splice(position-1, 1);
      return this;
    } else{
      chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    // this.chain = chain.splice(position-1, 1);
    //   return this;
  },
  reverseChain() {
    this.chain = chain.reverse();
    return this;
  },
  finishChain() {
    this.chain = chain.join('~~');
      chain = []; 
      return this.chain;
  }
};
