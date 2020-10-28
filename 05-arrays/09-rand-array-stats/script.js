/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){
        let random = [];
        for (let i = 0 ; i < 10 ; i++) {
            random.push(Math.ceil(Math.random() * 100));
            document.getElementById(`n-${i+1}`).innerHTML = random[i];
        };
        console.log(random);
        document.getElementById("min").innerHTML = Math.min(...random);
        document.getElementById("max").innerHTML = Math.max(...random);
        document.getElementById("sum").innerHTML = random.reduce((a, b) => a + b, 0);
        stat = random.reduce((a, b) => a + b, 0);
        document.getElementById("average").innerHTML = stat/random.length;
    });  
})();

//littéraux de gabarit
// ... = spread de tableaux valeurs séparées.