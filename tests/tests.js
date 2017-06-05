'use strict';

const jasmine = require('jasmine');
const myApp = require('../app/index.js');
const getPrimes = require('../app/index.js').getPrimes;

describe("Generate an array of prime numbers from 0 to n", function(){

    describe("Positive integer parameter", function(){
      
      it("should return '[2, 3, 5, 7]' for '10'", function (){
        expect(myApp.getPrimes(10)).toEqual([2, 3, 5, 7]);
      });

      it("should return '[2, 3, 5, 7, 11, 13]' for '15'", function (){
        expect(myApp.getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
      });

    }); 

    describe("'Falsy' input parameter", function(){

      it("should return 'not a valid number' for parameter not type number", function(){
        expect(myApp.getPrimes('mary')).toEqual('invalid argument');
      });

      it("should return '[]' for '0'", function (){
        expect(myApp.getPrimes(0)).toEqual([]);
      });

      it("should return '[]' if no prime number found", function(){
        expect(myApp.getPrimes(1)).toEqual([]);
      });

      it("should return '[]' for negative parameters", function(){
        expect(myApp.getPrimes(-2)).toEqual([]);
      });

      it("should return '[]' if no parameter is supplied", function(){
        expect(myApp.getPrimes()).toEqual([]);
      });
    });


    
  })