/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let password = document.getElementById('pass-one'), counter;

    password.addEventListener('keyup', () => {
    if (password.value.length > 10) {
        password.value = password.value.slice(0, 10);
    };
    n=password.value.length ;
    document.getElementById("counter").innerHTML = n + "/10";
})

})();
