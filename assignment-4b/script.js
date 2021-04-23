let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(position) {
  console.log("This is our position: ", position);
  $("#longitude").text(position.coords.longitude);
}

function error(err) {
  console.warn("Something went wrong: ", err.message);
}

let watchID = navigator.geolocation.watchPosition(success, error, options);
