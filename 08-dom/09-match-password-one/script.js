/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   
    document.getElementById("run").addEventListener("click", function(){    
        let x = document.getElementById("pass-one").value;
        let y = document.getElementById("pass-two").value;
        if (x != y){
            document.getElementsByTagName("input")[0].style.borderColor = "red";
            document.getElementsByTagName("input")[1].style.borderColor = "red";
        }
        else {
            document.getElementsByTagName("input")[0].style.borderColor = "silver";
            document.getElementsByTagName("input")[1].style.borderColor = "silver";
        }
    });

})();
