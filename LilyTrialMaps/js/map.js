// Initialize the map
let map = L.map('map').setView([latitude, longitude], zoomLevel);

// Basemap options
let baseLayers = {
    "Satellite": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }),
    "Street Map": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17 }),
    "Terrain": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', { maxZoom: 22 }),
    "Dark Mode": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 })
};

// Add basemap switcher control
L.control.layers(baseLayers).addTo(map);

// Load geospatial data
fetch('path/to/LilysHouse_Cop_FeaturesToJSO.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.description);
            }
        }).addTo(map);
    });