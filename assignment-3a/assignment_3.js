let send;
let title = $("#title");
let rating = $("#rating");
let movieList = $("#movie-list");

// När formuläret skickas (dvs. när användaren klickar på submit-knappen).
$("#add-movie").on("submit", function (e) {
  // Hindra formuläret från att skicka iväg användaren.
  e.preventDefault();

  send = true;

  // Validering.
  if (!title.val() && rating.val() == 0) {
    send = false;
    alert("Du måste ange titel och rating!");
  } else if (!title.val() && rating.val() > 0) {
    send = false;
    alert("Du måste ange en titel!");
  } else if (title.val() && rating.val() == 0) {
    send = false;
    alert("Du måste ange rating!");
  }

  // Om allting var korrekt - skicka vidare användaren.
  if (send) {
    var stars = "";

    for (let i = 0; i < rating.val(); i++) {
      stars += "<img src='images/star.png'>";
    }

    const $newMovie = $(
      '<li data-grade="' +
        rating.val() +
        '" data-title="' +
        title.val() +
        '">' +
        title.val() +
        "<img src='images/delete.png' alt='Delete movie' class='delete-movie' onClick='handleDelete(event)'>" +
        stars +
        "</li>"
    );

    $("#movie-list").append($newMovie);

    $("#add-movie").trigger("reset");
  }
});

function handleDelete(event) {
  $(event.target).parent().remove();
}
