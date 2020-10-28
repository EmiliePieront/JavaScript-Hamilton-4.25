/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
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
        };
        get fullname(){
            return '"' + this.Firstname + " " + this.Lastname + '"';
        };
        set fullname(lastname) {
            this.Lastname = "P"+"I"+"E"+"R"+"O"+"N"+"T";
        };
    };
    document.getElementById("run").addEventListener("click", function () {
        
        let moi = new Person("Emilie", "Pieront");
        console.log(Person.fullname(), Person.fullname());
     });
})();
