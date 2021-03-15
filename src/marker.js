import mapboxgl from "mapbox-gl";

function markerMaker(type, coords) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if (type === "restaurant") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  if (type === "activity") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  if (type === "hotel") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }

  //new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

export default markerMaker;
