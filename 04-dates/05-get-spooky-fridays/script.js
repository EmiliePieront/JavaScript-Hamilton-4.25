/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let year;
    let date = new Date();
    let month;
    let monthString = "";
    let listMonth = "";

    document.getElementById("run").addEventListener("click", function() {

       year = document.getElementById("year").value;
    
       for(month = 0;month < 12; month++){

           date.setFullYear(year, month, 13);
        
           if(date.getDay() == 5){

               monthString = date.toLocaleString("default", { month: "long" });
               listMonth = listMonth + " " + monthString;

            }
            
       }
       alert(listMonth);
       listMonth = "";
       

    });
})();
