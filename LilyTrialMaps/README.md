# 🗺️ Lily's Geospatial Web Map

An interactive web map built with Leaflet.js for geospatial data visualization and exploration.

## 📋 Overview

This project provides a foundation for creating interactive web-based maps with geospatial data. It uses:
- **Leaflet.js** - An open-source JavaScript library for interactive maps
- **OpenStreetMap** - Free and open-source map tiles
- **GeoJSON** - Standard format for geospatial data

## 📁 Project Structure

```
LilyTrialMaps/
├── index.html           # Main HTML file - open this in your browser
├── css/
│   └── style.css       # Styling and layout
├── js/
│   └── map.js          # Map initialization and data handling
├── data/
│   └── sample.geojson  # Sample geospatial data
└── README.md           # This file
```

## 🚀 Getting Started

### View Locally
1. Download or clone this repository
2. Open `index.html` in your web browser
3. The map will load with sample data points

### Using Your Own Data
1. Replace `data/sample.geojson` with your own GeoJSON file
2. Ensure your GeoJSON follows the standard format with `properties` (name, description, etc.) and `geometry`
3. The map will automatically load and display your features

## 🛠️ Customization

### Change Base Map
Edit `js/map.js` and replace the tile layer URL. Popular options:
```javascript
// CartoDB (colorful)
https://{s}.basemaps.cartocdn.com/positron/{z}/{x}/{y}{r}.png

// Satellite imagery
https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}

// Terrain
https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png
```

### Modify Marker Colors
In `js/map.js`, change the circle marker properties:
```javascript
fillColor: '#3388ff',  // Change hex color
radius: 8,             // Change marker size
```

### Add More Features
- Multiple GeoJSON layers
- Custom controls
- Measurement tools
- Search functionality
- Heatmaps

## 📚 Resources

- [Leaflet.js Documentation](https://leafletjs.com/)
- [GeoJSON Specification](https://geojson.org/)
- [OpenStreetMap](https://www.openstreetmap.org/)

## 📝 License

Feel free to use and modify this project for your geospatial learning!