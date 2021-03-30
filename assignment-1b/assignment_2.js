// Get button and list and put them into variables for later use.
let addButton = document.getElementById("add-item");
let list = document.getElementById("items");

/*
  'handleAddButton' handles functionality of the AddButton
*/
function handleAddButton(event) {
  // Get user input and save into variable.
  var input = window.prompt("Ange sak:", "Skriv här ...");
  // List item
  let liTextNode = document.createTextNode(input);
  let li = document.createElement("li");

  // Delete Span/Button
  let deleteButton = document.createElement("span");
  let spanTextNode = document.createTextNode("Delete");
  deleteButton.appendChild(spanTextNode);
  deleteButton.addEventListener("click", handleDeleteButton);

  // Appending created elements as childs to specified parent
  li.appendChild(liTextNode);
  li.appendChild(deleteButton);

  list.appendChild(li);
}

/*
  'handleDeleteButton' handles functionality of the Delete Span/Button
*/
function handleDeleteButton() {
  list.removeChild(this.parentNode);
}

addButton.addEventListener("click", handleAddButton);
