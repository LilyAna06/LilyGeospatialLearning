// Initialize the map
var map = L.map('map').setView([0, 0], 2);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON data
fetch('LilysHouse_Cop_FeaturesToJSO.json')
    .then(response => response.json())
    .then(data => {
        // Center the map on the features
        var features = data.features;
        var bounds = L.geoJSON(features).getBounds();
        map.fitBounds(bounds);

        // Add GeoJSON layer to the map
        L.geoJSON(features, {
            onEachFeature: function (feature, layer) {
                // Add popups for each feature
                layer.bindPopup(feature.properties.name);
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error loading GeoJSON:', error));

// Add map controls
L.control.scale().addTo(map);
L.control.layers().addTo(map);
