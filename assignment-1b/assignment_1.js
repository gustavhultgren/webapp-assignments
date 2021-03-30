let successButton = document.getElementById("success");
let errorButton = document.getElementById("error");
let infoButton = document.getElementById("info");

function handleSuccessButton(event) {
  var messageBox = document.getElementById("message-box");
  if (messageBox.classList.contains("error")) {
    messageBox.classList.remove("error");
  } else if (messageBox.classList.contains("info")) {
    messageBox.classList.remove("info");
  }
  messageBox.classList.add("success");
}

function handleErrorButton(event) {
  var messageBox = document.getElementById("message-box");
  if (messageBox.classList.contains("success")) {
    messageBox.classList.remove("success");
  } else if (messageBox.classList.contains("info")) {
    messageBox.classList.remove("info");
  }
  messageBox.classList.add("error");
}

function handleInfoButton(event) {
  var messageBox = document.getElementById("message-box");
  if (messageBox.classList.contains("error")) {
    messageBox.classList.remove("error");
  } else if (messageBox.classList.contains("success")) {
    messageBox.classList.remove("success");
  }
  messageBox.classList.add("info");
}

successButton.addEventListener("click", handleSuccessButton);
errorButton.addEventListener("click", handleErrorButton);
infoButton.addEventListener("click", handleInfoButton);
