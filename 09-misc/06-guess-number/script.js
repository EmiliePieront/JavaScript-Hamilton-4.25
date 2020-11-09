/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // programme ou l'utilisateur doit deviner le bon chiffre en 1 et 100

function guessNumber() {

    // Générer un random entre 1 et 100
    const random = Math.floor(Math.random() * 100) + 1;

    // appellle un input pour l'utilisateur
    let number = parseInt(prompt("Guess a number from 1 to 100"));
    let counter = 1;
    // boucle pour définir sir le chiffre proposer et suppérieur ou inférieur avec à chaque fois une alerte plus haut ou plus bas
    while(number != random) {
        if (number < random) {
            number = parseInt(prompt("heigher"));
            ++counter;
        }
        else if (number > random) {
            number = parseInt(prompt("lower"));
        ++counter;
        }
    }
    if (number == random){
        number = prompt("thats it !!! il vous a fallu " + counter +" coups");
    }
    // Affiche une alerte si la valeur est correct
    

  }

// appelle la fonction
guessNumber();
    // your code here

})();
