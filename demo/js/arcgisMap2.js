 var map;
require(["esri/map", "esri/dijit/BasemapToggle", "esri/layers/ArcGISDynamicMapServiceLayer", "dojo/domReady!"], function(Map, BasemapToggle, ArcGISDynamicMapServiceLayer) {
        map = new Map("map", {
          basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
          center: [-90, 30], // longitude, latitude
          zoom: 4
        });

// Create a layer object from an ArcGIS Server web service, with no options

var toggle = new BasemapToggle({
        map: map,
        basemap: "satellite"
      }, "BasemapToggle");
      toggle.startup();
     // Create a layer object from an ArcGIS Server web service, setting the opacity option

var layer2 = new ArcGISDynamicMapServiceLayer( "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/analysis_ocean_sfc_sst_time/MapServer", {
  "opacity": 0.55
  
});

map.addLayer(layer2); // add the layer object to the map 
var layer3 = new ArcGISDynamicMapServiceLayer( "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer", {
  "opacity": 0.55
});
map.addLayer(layer3); // add the layer object to the map 



});

		








