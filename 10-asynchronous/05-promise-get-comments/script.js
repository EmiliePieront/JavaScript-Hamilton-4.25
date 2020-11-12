/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts()
            .then(data => {
                data.forEach(element => {
                    window.lib.getComments(element.id).then(data => {
                        element.comments = data;
                        console.table(element)
                    })
                });
            })
    })
})();
  
