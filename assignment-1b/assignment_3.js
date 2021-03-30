/*
  'toggleNextElement' shows or hide elements that is next sibling.
*/
function toggleNextElement(e) {
  // Find next sibling
  let nextSibling = this.nextElementSibling;

  // Control if the element is shown or hidden
  if (nextSibling.style.display === "none") {
    nextSibling.style.display = "block";
  } else {
    nextSibling.style.display = "none";
  }
}

/* 
  'start' initially hides the content of the articles and adds eventListener 
  to the title.
*/
function start() {
  // Get all titles and save them into a variable
  var titles = document.querySelectorAll("h2");

  // Loop through all titles and hide the content and add eventListener
  titles.forEach((title) => {
    let nextSibling = title.nextElementSibling;
    nextSibling.style.display = "none";
    title.addEventListener("click", toggleNextElement);
  });
}

start();
