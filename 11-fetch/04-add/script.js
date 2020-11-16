/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let heroes = [];
    const URL = 'http://localhost:3000/heroes';
    const name = document.getElementById('hero-name');
    const alter = document.getElementById('hero-alter-ego');
    const power = document.getElementById('hero-powers');

    fetchHero = () => {
        fetch(URL)
            .then(response => {
                if (response.status !== 200) {
                    console.log(`An error occured : ${response.status}`)
                }

                response.json()
                    .then(data => {
                        heroes = data;
                        console.log(heroes)
                    })
            })
            .catch(err => console.log(err))
    }

    fetchHero();

    addHero = (name, alter, powers) => {
        if (confirm(`Do you want to add ${name} alias ${alter} and these abilities :${powers}?`)) {
            heroes.push({
                id: ++heroes[heroes.length-1].id,
                name: name,
                alterEgo: alter,
                abilities: powers.split(', ')
            })
            console.log(heroes)
            
            // fetch(URL, {
            //     method: 'POST',
            //     body: JSON.stringify(heroes[heroes.length-1]),
            //     headers: {
            //         "Content-type": "application/json; charset=UTF-8"
            //     }
            // })
            // .then(response => {
            //     if (response.status !== 200) {
            //         console.log(`An error occured : ${response.status}`)
            //     }
            // })
        }
        
    }

    document.getElementById('run').addEventListener('click', () => {
        addHero(name.value, alter.value, power.value)
    })
})();
