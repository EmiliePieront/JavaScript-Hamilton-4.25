/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    document.querySelector("#run").addEventListener("click", () => {
      // Récupérer les infos du serveur local comme pour l'ex 11.1
      fetch("http://localhost:3000/heroes")
        .then (dataHeroes => dataHeroes.json())
        .then(function (dataHeroes) {
            let template = document.getElementById("tpl-hero").content;
            // Récupérer contenu tpl-hero a cloner dans nouvel emplacement
            let location = document.getElementById("target");

            dataHeroes.forEach(function (hero) {
            let templateClone = template.cloneNode(true); //cloner template

            templateClone.querySelector(".name").innerHTML = hero.name; //mettre tout au bon endroit pour chaque héro
            templateClone.querySelector(".alter-ego").innerHTML = hero.alterEgo;
            templateClone.querySelector(
                ".powers"
            ).innerHTML = hero.abilities.join(", ");

            location.appendChild(templateClone); //la nouvelle template cloner dans nouvelle emplacement
            });
            document.getElementById("tpl-hero").remove(); //je supprime ancien emplacement pour code plus propre
        });
    });
  })();

