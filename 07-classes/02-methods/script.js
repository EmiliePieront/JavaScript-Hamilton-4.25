/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.Firstname = firstname;
            this.Lastname = lastname;
        }
        sayHello() { 
            console.log("Hello, " + this.Firstname + " " + this.Lastname + "!");
        }
    }
    document.getElementById("run").addEventListener("click", function () {
        
        let user = new Person("Emilie", "Pieront");
        user.sayHello();
     });
})();
