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
            return `${this.Firstname} ${this.Lastname}`;
        };
        set fullname(value){
            [this.Firstname, this.Lastname] = value.split(" ");
        }
    };
    let moi = new Person("Emilie", "Pieront");
    document.getElementById("run").addEventListener("click", function () {
        console.log(moi.fullname);
        moi.fullname = "Dany Boon";
        console.log(moi.fullname);
     });

})();

// split est super important pour qu'il prenne les éléments à la suite.