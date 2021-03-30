// Get buttons and put them into variables for later use.
let successButton = document.getElementById("success");
let errorButton = document.getElementById("error");
let infoButton = document.getElementById("info");

/*
  'handleSuccessButton' handles functionality of the SuccessButton. 
*/
function handleSuccessButton(event) {
  var messageBox = document.getElementById("message-box");

  // If message-box already contain classes, remove them and add the right one.
  if (messageBox.classList.contains("error")) {
    messageBox.classList.remove("error");
  } else if (messageBox.classList.contains("info")) {
    messageBox.classList.remove("info");
  }
  messageBox.classList.add("success");
}

/*
  'handleErrorButton' handles functionality of the ErrorButton. 
*/
function handleErrorButton(event) {
  var messageBox = document.getElementById("message-box");

  // If message-box already contain classes, remove them and add the right one.
  if (messageBox.classList.contains("success")) {
    messageBox.classList.remove("success");
  } else if (messageBox.classList.contains("info")) {
    messageBox.classList.remove("info");
  }
  messageBox.classList.add("error");
}

/*
  'handleInfoButton' handles functionality of the InfoButton. 
*/
function handleInfoButton(event) {
  var messageBox = document.getElementById("message-box");

  // If message-box already contain classes, remove them and add the right one.
  if (messageBox.classList.contains("error")) {
    messageBox.classList.remove("error");
  } else if (messageBox.classList.contains("success")) {
    messageBox.classList.remove("success");
  }
  messageBox.classList.add("info");
}

// Add event listeners to the buttons
successButton.addEventListener("click", handleSuccessButton);
errorButton.addEventListener("click", handleErrorButton);
infoButton.addEventListener("click", handleInfoButton);
