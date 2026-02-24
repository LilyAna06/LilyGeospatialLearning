// Include Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Set up the tile layer with attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load geospatial data
fetch('path/to/LilysHouse_Cop_FeaturesToJSO.json')
    .then((response) => response.json())
    .then((data) => {
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.name);
            }
        }).addTo(map);
    });

// Add zoom controls
L.control.zoom({ position: 'topright' }).addTo(map);

// Add a title to the map
map.createPane('title').style.zIndex = 650;

// Ensure the map fits the available space
document.addEventListener('DOMContentLoaded', function () {
    map.invalidateSize();
});

// Code explanation and other functionalities may go here.