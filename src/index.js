import mapboxgl from "mapbox-gl";
import markerMaker from "./marker";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyY2JlYXVjb3VwIiwiYSI6ImNrbWFyb3RoYTF1YmEycG9qNzJmMWdpODkifQ.aNFf17s09-61gOwOnXGUDQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = markerMaker("restaurant", [-73.989, 40.741]);

marker.addTo(map);
