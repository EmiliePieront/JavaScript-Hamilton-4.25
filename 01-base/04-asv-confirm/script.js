/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var age, gender, town, question; 
    age = prompt("Quel âge avez vous?");
    gender = prompt("Quelle est votre genre?");
    town = prompt("Dans quelle ville vivez vous?");
    question = confirm("Vous êtes bien une personne de sexe" + gender + "De " + age + "ans, vivant à" + town + " ?");
    if (question == 1){
        alert("Cool");
    }
    else {
    age = prompt("Quel âge avez vous?");
    gender = prompt("Quelle est votre genre?");
    town = prompt("Dans quelle ville vivez vous?");
    question = confirm("Vous êtes bien une personne de sexe" + gender + "De " + age + "ans, vivant à" + town + " ? ");
    }
})();
