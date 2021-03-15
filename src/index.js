import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpYWFiZHVsYWhpIiwiYSI6ImNrbWFyb2JwZjF1cjkydW9mMjI0Z3E4aHQifQ.V4q8vLaTa7mm9eZ8tudWjg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});