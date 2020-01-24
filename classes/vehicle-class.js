'use strict';


class Vehicle {

  constructor(name , wheels){
    this.name = name ;
    this.wheels = wheels ;
  }
  drive(){
    return 'Moving Forward' ;
  }
  stop(){
    return 'Stopping' ;
  }
}


// using extends let us use the class after it , with super .

class Car extends Vehicle{
  constructor(name){
    super(name , 4);
  }

  runIt(){
    super.drive();
    super.stop();
  }
}

class Motorcycle extends Vehicle{
  constructor(name){
    super(name , 2) ;
  }

  runIt(){
    super.drive();
    super.stop();
  }

  wheelie(){
    return 'Wheee!' ;
  }
}

module.exports = {Car , Motorcycle};