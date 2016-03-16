var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.4500N, lng: 91.1400W },
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    heading: 90,
    tilt: 45
  });
}

function rotate90() {
  var heading = map.getHeading() || 0;
  map.setHeading(heading + 90);
}

function autoRotate() {
  // Determine if we're showing aerial imagery.
  if (map.getTilt() !== 0) {
    window.setInterval(rotate90, 3000);
  }
}
<div id="floating-panel"><input type="button" value="Auto Rotate" onclick="autoRotate();"></div>
<div id="map"></div>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#map {
  height: 100%;
}
#floating-panel {
  position: absolute;
  top: 10px;
  left: 25%;
  z-index: 5;
  background-color: #fff;
  padding: 5px;
  border: 1px solid #999;
  text-align: center;
  font-family: 'Roboto','sans-serif';
  line-height: 30px;
  padding-left: 10px;
}
<!-- Replace the value of the key parameter with your own API key. -->
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap">
</script>
JAVASCRIPTJAVASCRIPT + HTML


	  var layer1 = new ArcGISDynamicMapServiceLayer( "http://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WmsServer" );
	  map.addLayer(layer1); // add the layer object to the map