/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async () => {
      try {
        const result = await window.lib.getPosts();
  
        result.forEach((article) => {
          window.lib
            .getComments(article.id)
  
            .then((comment) => {
              article.comment = comment;
            });
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    });
  })();
