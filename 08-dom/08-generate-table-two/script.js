/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
        for (let j = 1; j < 11; j++) {
          let row = document.createElement("tr");
          for (let i = 1; i < 11; i++) {
            let cell = document.createElement("td");
            cell.innerText= i + "x" + j + "=" + i*j ;
            row.appendChild(cell);
          }
          tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl);

})();
