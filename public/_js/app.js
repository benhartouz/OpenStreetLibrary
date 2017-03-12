/*
 * EasyOPM.js v0.4.25
 * Copyright 2017, Ben Hartouz Mohamed
 * Released under the MIT License.
 */


var EasyOPM = ( function(global){
     "use strict";
           var settings  = {
              lnglat  : (typeof global.lnglat == "array" ) ? global.lnglat : [0,0]   ,
              zoom    : global.zoom
           }
           this.init = function(){
             var map = new ol.Map({
               layers: [
                 new ol.layer.Tile({
                   source: new ol.source.OSM()
                 })
               ],
               target: 'map',
               view: new ol.View({
                 center: settings.lnglat,
                 zoom: settings.zoom
               })
             });
           }



           return this.init();
});


var map = new EasyOPM({
   lnglat : "qsqsd" ,
   zoom : 2
});
