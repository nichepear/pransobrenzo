/*
 * Javascript for: Location (location.html)
 * Handlebar.js functions
 * Information from data.js
*/

//restaurants coordinatos in Map
var mapLocationInfo = document.getElementById('map-location-template').innerHTML;
var template = Handlebars.compile(mapLocationInfo);
var mapLocationData = template(restaurantInfoData);
document.getElementById('mapLocationData').innerHTML = mapLocationData;

//populated informations about adress and hours
var restaurantInfo = document.getElementById('restaurant-template').innerHTML;
var template = Handlebars.compile(restaurantInfo);
var restaurantData = template(restaurantInfoData);
document.getElementById('restaurantData').innerHTML = restaurantData;

