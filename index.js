import { Loader } from "@googlemaps/js-api-loader"

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -29.2369694, lng: -1.6783495 },
    zoom: 8,
  });
}

window.initMap = initMap;