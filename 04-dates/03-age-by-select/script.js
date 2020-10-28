/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    let age;
    let today = new Date();
    let curr_date = today.getDate();
    let curr_month = today.getMonth() + 1;
    let curr_year = today.getFullYear();
    let birth_date;
    let birth_month;
    let birth_year;

    function calculAge(birth_date, birth_month, birth_month ){
    if (curr_month == birth_month && curr_date >= birth_date){
        age = parseInt(curr_year-birth_year);
        
    }  
    else if (curr_month == birth_month && curr_date < birth_date){ 
        age = parseInt(curr_year-birth_year-1);
        
    }
    else if (curr_month > birth_month) {
        age = parseInt(curr_year-birth_year);
        
    }
    else if (curr_month < birth_month){
        age = parseInt(curr_year-birth_year-1);
        
    }
}
    document.getElementById("run").addEventListener ("click", function () {
        birth_date = document.getElementById("dob-day").value;
        birth_month = document.getElementById("dob-month").value;
        birth_year = document.getElementById("dob-year").value;
        calculAge(birth_date, birth_month, birth_month);
        alert(age + " ans");
    })
})();
    


