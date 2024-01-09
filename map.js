// Construyo la variable del mapa
const map = L.map('map').setView([0, -0], 2);
// Traigo el mapa base, lo centro y declaro las atribuciones
L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy <a href="https://carto.com/">CARTO</a>'
}).addTo(map);
// Geojson
L.geoJson(ciudades);
// Función Popup
function popup(feature, layer) { 
    if (feature.properties && feature.properties.CITY_NAME) 
        { 
            layer.bindPopup(feature.properties.CITY_NAME); 
        } 
    };
// Función icono propio
function createCustomIcon (feature, latlng) {
    let myIcon = L.icon({
      iconUrl: 'icon.png',
      iconSize:     [30, 30], // width and height of the image in pixels
      iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
      shadowAnchor: [12, 12],  // anchor point of the shadow. should be offset
      popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    })
    return L.marker(latlng, { icon: myIcon })
  } 
let myLayerOptions = {
pointToLayer: createCustomIcon,
onEachFeature: popup
}
// create the GeoJSON layer
L.geoJSON(ciudades, myLayerOptions).addTo(map);