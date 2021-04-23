let inputFields = $("input");
var send;

// När formuläret skickas (dvs. när användaren klickar på submit-knappen).
$("#newsletter").on("submit", function (e) {
  // Hindra formuläret från att skicka iväg användaren.
  e.preventDefault();

  send = true;

  // Här placerar ni er validerings kod.
  for (var i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value) {
      inputFields[i].style.backgroundColor = "red";
      send = false;
    } else {
      inputFields[i].style.backgroundColor = "white";
    }
  }

  // Om allting var korrekt - skicka vidare användaren.
  if (send) {
    $("#newsletter")[0].submit();
    for (var i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    alert("Sent!");
  }
});
