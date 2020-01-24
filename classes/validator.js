'use strict';


class validator {
  constructor(str, num, arr ,obj ,func , bool){
    this.str = str;
    this.num = num;
    this.arr = arr;
    this.obj = obj;
    this.func = func;
    this.bool = bool;
  }
 
  isValid(input) {
    let isArray = input instanceof Array;
    if (!isArray) {
      return true;
    }
  }

  isString(input){
    return typeof input === 'string';
  }
    
  isAnumber (value){
    return typeof value === 'number';
  }
    
  isAnArray (value) {
    return typeof value[0] === 'string';
  }
    
  isAnObject (value){
    let test = Object.keys(value);
    return typeof test[0] === 'string';
  }
    
  isAbolean (value) {
    return typeof value === 'boolean';
  }
    
  isAfunction (value){
    return typeof value === 'function';
  }
    

}


module.exports = validator ;







