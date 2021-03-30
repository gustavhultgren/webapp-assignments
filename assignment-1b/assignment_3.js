/*
    `toggleNextElement` har som uppgift att visa eller dölja ett elements
    kommande syskon. I vårt fall när vi klickar på en rubrik (h2) ska det
    nästkommande syskonet (section) visas eller döljas.
*/

function toggleNextElement(e) {
  // Leta upp det nästkommande element-syskonet
  let nextSibling = this.nextElementSibling;

  // Kontrollera om element visas eller döljs
  if (nextSibling.style.display === "none") {
    nextSibling.style.display = "block";
  } else {
    nextSibling.style.display = "none";
  }
}

/*
    `start` har som uppgift att dölja allt innehåll för våra artiklar och
    ser till att funktionen `toggleNextElement` körs när en användare
    klickar på rubrikerna (h2)
*/
function start() {
  // Hämta alla rubriker (h2) och spara dom i en variabel
  var titles = document.querySelectorAll("h2");

  titles.forEach((title) => {
    let nextSibling = title.nextElementSibling;
    nextSibling.style.display = "none";
    title.addEventListener("click", toggleNextElement);
  });
}

start();
