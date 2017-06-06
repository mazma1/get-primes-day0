'use strict';

module.exports = {
    getPrimes: (n) => {
        //isPrime checks if a number is prime
        let isPrime = (number) => {
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false;
                }  
            }  
            return true;
        };
        if (n <= 0 || typeof n !== 'number') {
            console.log ("Your input should be a positive number.");
            return ('invalid argument');
        }
        else {
            let primeList = [];
            for (var j = 2; j <= n; j++) {
                if (isPrime(j)) {
                    primeList.push(j);
                } 
            }
            return primeList;
        }    
    }
} 