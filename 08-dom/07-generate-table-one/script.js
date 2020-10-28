/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        let body = document.getElementById("target");
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");
        for (let j = 0; j < 10; j++) {
          let row = document.createElement("tr");
          for (let i = 0; i < 1; i++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
          }
          tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
})();
