/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let number = 1;
    while (number <= 100){
        if (number % 3 == 0 && number % 5 == 0){
            console.log("FizzBuzz");
        }
        else if (number % 3 == 0){
            console.log("Fizz");
        }
        else if (number % 5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(number);
        }
        number += 1;
    }
    
})();
