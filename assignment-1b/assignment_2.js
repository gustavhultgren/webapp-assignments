let addButton = document.getElementById("add-item");
let list = document.getElementById("items");

function handleAddButton(event) {
  var input = window.prompt("Ange sak:", "Skriv här ...");
  let liTextNode = document.createTextNode(input);
  let li = document.createElement("li");

  let deleteButton = document.createElement("span");
  let spanTextNode = document.createTextNode("Delete");
  deleteButton.appendChild(spanTextNode);
  deleteButton.addEventListener("click", handleDeleteButton);

  li.appendChild(liTextNode);
  li.appendChild(deleteButton);

  list.appendChild(li);
}

function handleDeleteButton() {
  list.removeChild(this.parentNode);
}

addButton.addEventListener("click", handleAddButton);
