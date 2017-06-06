'use strict';

let myApp = require("../app/index");

describe("Generate an array of prime numbers from 0 to n:", function(){

    describe("Positive integer parameter", function(){
      
      it("should return '[2, 3, 5, 7]' for '10'", function (){
        let primeArray = myApp.getPrimes(10);  
        expect(primeArray).toEqual([2, 3, 5, 7]);
      });

      it("should return '[2, 3, 5, 7, 11, 13]' for '15'", function (){
        let primeArray = myApp.getPrimes(15);
        expect(primeArray).toEqual([2, 3, 5, 7, 11, 13]);
      });

    }); 

    describe("'Falsy' input parameter", function(){

      it("should return 'not a valid number' for parameter not type number", function(){
        let primeArray = myApp.getPrimes('mary');
        expect(primeArray).toEqual('invalid argument');
      });

      it("should return '[]' for '0'", function (){
        let primeArray = myApp.getPrimes(0);
        expect(primeArray).toEqual([]);
      });

      it("should return '[]' if no prime number found", function(){
        let primeArray = myApp.getPrimes(1);
        expect(primeArray).toEqual([]);
      });

      it("should return '[]' for negative parameters", function(){
        let primeArray = myApp.getPrimes(-2);
        expect(primeArray).toEqual([]);
      });

      it("should return '[]' if no parameter is supplied", function(){
        let primeArray = myApp.getPrimes();
        expect(primeArray).toEqual([]);
      });
    });
})