// Initialize the map centered on default location
let map = L.map('map').setView([-37.0, 174.8], 12);

// Define multiple basemaps
const baseMaps = {
    "Street Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }),
    
    "Satellite Imagery": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 18
    }),
    
    "Terrain": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors',
        maxZoom: 17
    }),
    
    "Dark Mode": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19
    })
};

// Set default basemap (Street Map)
baseMaps["Street Map"].addTo(map);

// Add basemap control layer
const layerControl = L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map);

// Load geospatial data from JSON file
fetch('LilysHouse_Cop_FeaturesToJSO.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: '#3388ff',
                    color: '#000',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function(feature, layer) {
                // Create popup content from feature properties
                let popupContent = '<div style="font-family: Arial; font-size: 14px;">';
                
                if (feature.properties.appellation) {
                    popupContent += '<h3 style="margin: 0 0 10px 0;">' + feature.properties.appellation + '</h3>';
                }
                
                // Display all properties
                for (let key in feature.properties) {
                    if (key !== 'appellation') {
                        popupContent += '<p style="margin: 5px 0;"><strong>' + key + ':</strong> ' + feature.properties[key] + '</p>';
                    }
                }
                
                popupContent += '</div>';
                layer.bindPopup(popupContent);
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error loading GeoJSON:', error));

// Add scale control
L.control.scale().addTo(map);

// Ensure map resizes properly
map.invalidateSize();