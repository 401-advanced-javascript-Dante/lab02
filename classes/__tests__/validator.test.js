'use strict';

const validator = require('../validator');

console.log(validator);
let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let bool = false;
let classy = new validator(str , num , arr ,obj , func , bool) ;

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    
    expect(classy.isString(str)).toBeTruthy();
    let testArr = [num , arr ,obj , func , bool];
    testArr.forEach((val) => {
      expect(classy.isString(val)).toBeFalsy();
    });
  });

  it('numbers', () => {
    let num = 1;
    expect(classy.isAnumber(num)).toBeTruthy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(classy.isAnArray(arr)).toBeTruthy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    // console.log(classy.isAnObject(obj));
    expect(classy.isAnObject(obj)).toBeTruthy();
  });

  it('booleans', () => {
    let bool = false;
    expect(classy.isAbolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    let func = () => {};
    expect(classy.isAfunction(func)).toBeTruthy();
  });

});



describe('validator module performs complex validations', () => {
  
  let testObject = new validator() ;

  testObject.sweeet = 'areeeeeos' ; 

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(testObject.isString(testObject.hi?testObject.hi:false)).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    testObject.name = 'Abdulrhman';
    expect(testObject.isString(testObject.name)).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    testObject.level = 9 ;
    expect(testObject.isAnumber(testObject.level)).toBeTruthy();
  });
  

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    testObject.styles = [ 'royal gurd', 'sword master' , 'trick' , 'guns master'] ;
    expect(testObject.isAnArray(testObject.styles)).toBeTruthy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    testObject.mortal = true ;
    expect(testObject.isAbolean(testObject.mortal)).toBeTruthy();
  });

  // TODO: Cover so, so many more cases

  it('the array elements should be strings' , () => {
    expect(testObject.isString(testObject.styles[0])).toBeTruthy();
  });

});

