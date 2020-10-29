/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let letterContainer = document.querySelector("#target");
    let letters = letterContainer.innerText;
    letters = letters.split("");
    letterContainer.innerText = "";
    const size = [ 15, 18, 21, 24, 27, 30, 27, 24, 21, 18];

    letters.forEach(function(letter, i){
        let wrap = document.createElement("span");
        wrap.innerText = letter;
        wrap.style.fontSize = size[i % size.length] + "px";
        letterContainer.appendChild(wrap);
    });

})();