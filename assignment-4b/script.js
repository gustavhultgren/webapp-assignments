let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(position) {
  console.log("This is our position: ", position);
  $("#longitude").text(position.coords.longitude);
  $("#latitude").text(position.coords.latitude);
  $("#accuracy").text(position.coords.accuracy);
  $("#altitude").text(position.coords.altitude);
  $("#accuracy-altitude").text(position.coords.accuracy - altitude);
  $("#speed").text(position.coords.speed);

  let speedInKmh = position.coords.speed * 3.6;

  if (speedInKmh < 5) {
    $("#speed-container").css("background-color", "red");
  } else if (speedInKmh > 5 && speedInKmh < 10) {
    $("#speed-container").css("background-color", "yellow");
  } else if (speedInKmh > 10) {
    $("#speed-container").css("background-color", "green");
  }
  $("#currect-speed").text(speedInKmh);
}

function error(err) {
  console.warn("Something went wrong: ", err.message);
}

let watchID = navigator.geolocation.watchPosition(success, error, options);
