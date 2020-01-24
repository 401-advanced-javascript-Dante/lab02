'use strict';

const VehicleConstructor = require('../vehicle-constructor.js');
const withClass = require('../vehicle-class') ;

let types = ['Constructor'];

describe('Vehicles', () => {

  describe('Car', () => {
    
    function getCar(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Car('foo');
      default:
        return {};
      }
    }
    
    types.forEach( type => {
      
      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      }); 
    });

  });

  describe(`Motorcycle`, () => {

    function getMotorcycle(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Motorcycle('foo');
      default:
        return {};
      }
    }

    types.forEach( type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });
      
    });

  });

});


////////////////////////////////////////////
describe('Vehicles With Class Method', () => {

  describe('Car', () => {
    let bmw = new withClass.Car('bmw');
    it('class constructor works and give us an object' , ()=> {
      expect(bmw.name).toEqual('bmw');
    });

    it('you can drive forward ' , ()=> {
      expect(typeof(bmw.drive())).toEqual('string');
    });
    it('you can stop' , ()=> {
      expect(typeof(bmw.stop())).toEqual('string');
    });
    it('have 4 doors' , ()=> {
      expect(bmw.wheels).toEqual(4);
    });
    it('Run It' , ()=> {
      expect(bmw.runIt()).toEqual(undefined);
    });

  });

  describe('MotorCycle', () => {
    let bmw = new withClass.Motorcycle('Dmc');
    it('class constructor works and give us an object' , ()=> {
      expect(bmw.name).toEqual('Dmc');
    });

    it('you can drive forward ' , ()=> {
      expect(typeof(bmw.drive())).toEqual('string');
    });
    it('you can stop' , ()=> {
      expect(typeof(bmw.stop())).toEqual('string');
    });
    it('have 2 doors' , ()=> {
      expect(bmw.wheels).toEqual(2);
    });

    it('Wheee!!!' , ()=> {
      expect(bmw.wheelie()).toEqual('Wheee!');
    });

    it('Run It' , ()=> {
      expect(bmw.runIt()).toEqual(undefined);
    });
  });


});
