/**
 * Establecemos funciones para correr el mapa por pantalla
 */

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: Estados[13].ubicacion.lat,lng: Estados[13].ubicacion.long},
    //center: {lat: -72.1762635, lng: 4.539517},
    zoom: 6
  });
}