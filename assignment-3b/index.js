let search = $("#search-movie");
let movies = $("#movies");

search.on("keyup", function () {
  if (search.val().length > 2) {
    if (movies) {
      movies.empty();
    }
    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?apikey=91ba7423&s=" + search.val(),
      success: function (data) {
        console.log("success", data);
        let results = data.Search;
        results.forEach((movie) => {
          movies.append(
            '<li><img src="' +
              movie.Poster +
              '"><p>' +
              movie.Title +
              "</p><span>" +
              movie.Year +
              "</span></li>"
          );
        });
      },
    });
  }
});
